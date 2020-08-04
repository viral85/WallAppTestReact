import React, { useEffect, useState, useContext }  from 'react';
import DisplayPost from './components/DisplayPost';

import './LandingPage.css';
import LoadingOrError from '../../sharedComponents/LoadingOrError';
import { UserContext } from '../../contexts/UserContext';

import { getAllLatestWallPosts } from '../../api/Queries';

import {
  withRouter,
  useHistory,
  Link
} from "react-router-dom";

function LandingPage() {
  let history = useHistory();
  const userState = useContext(UserContext);

  const [fetching, setFetching] = useState(false);
  const [fetchingErr, setFetchingErr] = useState(false);
  const [fetchingErrMsg, setFetchingErrMsg] = useState(false);
  const [wallPostsData, setWallPostsData] = useState([]);

  const [updated, setUpdated] = useState(false);

  function getLatestWallPosts(){
    setFetching(true);
    setFetchingErr(false);
    setFetchingErrMsg('');

    getAllLatestWallPosts({
      token: null
    }).then((response) => {
      if(response.status === 1){
        setWallPostsData(response.data);
        setFetching(false);
      } else {
        console.log(response);
        setFetchingErrMsg(response.message);
        setFetchingErr(true);
        setWallPostsData([]);
        setFetching(false);
      }
    }).catch((err)=>{
      console.log(err);
      setFetchingErr(true);
      setFetchingErrMsg("a network error occured")
      setWallPostsData([]);
      setFetching(false);
    });
  }

  useEffect(() => {
    if(wallPostsData.length === 0){
      getLatestWallPosts();
    }
  }, [wallPostsData])

  useEffect(() => {
    if(updated){
      getLatestWallPosts();
      setUpdated(false);
    }
  }, [updated]);

  return (
    <div className="wall-wrapper">
      <div className="user-profile shadow">
        <div className="username">
          <button type="button" className="btn-logout btn btn-primary" onClick={() => history.push('/Login')}>Login</button>
        </div>
      </div>
      <div className="main-wrapper container">
        <div className="row">
          <div className="col-lg-7 left-section">
            {(fetching || fetchingErr) ? (
              <div className="loader-overlay">
                <div className="loader-main-container">
                  <LoadingOrError
                    loading={fetching}
                    loadingMsg={'Fetching Top 10 Latest Posts...'}
                    err={fetchingErr}
                    errMsg={fetchingErrMsg}
                  />
                </div>
              </div>
            ) : (
              <div className="wall-left-wrapper">
                {wallPostsData && wallPostsData.length > 0 ? wallPostsData.map((v, idx) => {
                  return (
                    <DisplayPost setUpdated={setUpdated} post={v} key={idx}/>
                  )
                }): undefined}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default withRouter(LandingPage);