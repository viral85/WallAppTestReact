import {config} from '../config'

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
  const response = await fetch(`${baseUrl}/api/v1/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}