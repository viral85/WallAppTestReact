import {config} from '../config';
import { getTokenFromLocalStorage, getUserFromLocalStorage, clearLocalStorage } from '../utils/localStorage';

const baseUrl = config.apiBaseUrl;

/// Structure for handling errors/data loading
export function fetchData({setFetching, setFetchingErr, setData, setErrMsg, query, queryInput, fullResp, setPagination }){
  setFetching(true);
  setFetchingErr(false);
  query(queryInput)
  .then((resp)=> {
    console.log(resp);
    if(queryInput?.signal && !queryInput.signal.aborted){
      if(resp.status === 'success'){
        if(resp.pagination && setPagination){
          setPagination(resp.pagination);
        }
        {fullResp ? setData(resp) : setData(resp.data)}
      } else if(resp.status === 'unauthorized' || resp.status === 'error'){
        setFetchingErr(true)
        setErrMsg('message' in resp && resp.message ||'error' in resp && resp.error)
      } else{
        setFetchingErr(true)
        setErrMsg(resp.error)
      }
    }
    setFetching(false);
  })
  .catch((err)=>{
    console.log(err);
    setFetchingErr(true)
    setErrMsg('A network error has occured')
    setFetching(false);
  });
}

//creates new user
export async function signUpQuery(data) {
  const response = await fetch(`${baseUrl}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

// Log in for existing user
export async function signInQuery(data) {
  const response = await fetch(`${baseUrl}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

// get existing user detail
export async function getCurrentUser({ id, token }) {
  const response = await fetch(`${baseUrl}/api/users/details/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  return await response.json();
}


export async function isUserLoggedIn({ id, token }) {
  if (!token) {
    return false;
  }

  let user;

  try {
    user = await getCurrentUser({ id, token });
  } catch (err) {
    console.log(err);
    clearLocalStorage()
    return false;
  }
  if (!user) {
    clearLocalStorage()
    return false;
  }
  return user.data;
}