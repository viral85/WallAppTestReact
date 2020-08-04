import React, { useEffect, useState, useContext } from 'react';
import { Formik } from 'formik';
import { Dots } from 'react-activity';
import moment from 'moment';

import user_placeholder from '../../../assets/images/user-placeholder.svg';
// import like from '../../../assets/images/like.svg';
// import like_active from '../../../assets/images/like-active.svg';
import comment from '../../../assets/images/comment.svg';
import comment_active from '../../../assets/images/comment-active.svg';

import { createNewPost } from '../../../api/Queries';
import { UserContext } from "../../../contexts/UserContext";

import '../LandingPage.css';
import WriteCommentOnPost from './WriteCommentOnPost';

function DisplayPost({ setUpdated, post, key }) {
  const userState = useContext(UserContext);

  const [wantToAddNewComment, setWantToAddNewComment] = useState(false);
  
  return (
    <div key={key} className="post-area-wrapper">
      <div className="user-section">
          <div className="user-avatar">
            <img src={user_placeholder} alt="" />
          </div>
          <div className="username">
            <p>{post?.created_by ? post?.created_by : ''}</p>
          </div>
          <div className="date float-right">
            <p>{post?.created_on ? moment(post.created_on).fromNow() : ''}</p>
          </div>
          <div className="post-content-wrapper">
              <p className="post-area">{post?.content ? post?.content : ''}</p>
          </div>
          <div className="like-comment-wrapper">
              <ul>
                  {/* <li>
                      <a href="javascript:void(0)"><img src={like_active} />500</a>
                  </li> */}
                  {post && 'comments' in post && post.comments.length > 0 ? (
                    <li>
                        <a href="javascript:void(0)" onClick={() => {
                          if(!wantToAddNewComment){
                            setWantToAddNewComment(true)
                          } else {
                            setWantToAddNewComment(false)
                          }
                        }}>{post && 'comments' in post ? `${post.comments.length > 1 ? `${post.comments.length} Comments` : `${post.comments.length} Comment`}` : ''}</a>
                    </li>
                  ) : undefined}
              </ul>
          </div>
      </div>
      <div className="post-btn-wrapper">
          <ul>
              {/* <li className="active">
                  <a href="#" className="icon-like"><img src={like} />like</a>
                  <a href="#" className="icon-like-active"><img src={like_active} />like</a>
              </li> */}
              <li className={`${wantToAddNewComment ? 'active': ''}`} >
                  <a href="javascript:void(0)" className="icon-comment" onClick={() => setWantToAddNewComment(true)}><img src={comment} />Comment</a>
                  <a href="javascript:void(0)" className="icon-comment-active" onClick={() => setWantToAddNewComment(false)}><img src={comment_active} />Comment</a>
              </li>
          </ul>
      </div>
      {wantToAddNewComment ? (
        <WriteCommentOnPost comments={post?.comments} setUpdated={setUpdated} postId={post?.id ? post?.id : ''}/>
        ) : (undefined)}
    </div>
  );
}

export default DisplayPost;
