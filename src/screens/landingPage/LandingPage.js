import React from 'react';
import user_placeholder from '../../assets/images/user-placeholder.svg';
import like from '../../assets/images/like.svg';
import comment from '../../assets/images/comment.svg';
import like_active from '../../assets/images/like-active.svg';
import comment_active from '../../assets/images/comment-active.svg';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="wall-wrapper">
            <div className="main-wrapper container">
                <div className="row">
                    <div className="col-lg-7 left-section">
                        <div className="wall-left-wrapper ">
                            <div className="post-area-wrapper">
                                <div className="user-section">
                                    <div className="user-avatar">
                                        <img src={user_placeholder} alt="" />
                                    </div>
                                    <div className="username">
                                        <p>Username</p>
                                    </div>
                                    <div className="post-content-wrapper">
                                        <p className="post-area">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className="like-comment-wrapper">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)"><img src={like_active} />500</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">500 Comments</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-btn-wrapper">
                                    <ul>
                                        <li className="active">
                                            <a href="#" className="icon-like"><img src={like} />like</a>
                                            <a href="#" className="icon-like-active"><img src={like_active} />like</a>
                                        </li>
                                        <li>
                                            <a href="#" className="icon-comment"><img src={comment} />Comment</a>
                                            <a href="#" className="icon-comment-active"><img src={comment_active} />Comment</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Comment-section">
                                    <div className="comment-block">
                                        <textarea placeholder="Write a comment.." className="comment" rows="3"></textarea>
                                    </div>
                                    <div className="post-btn-wrapper">
                                        <button type="button" className="btn-post btn btn-primary">Post</button>
                                    </div>
                                </div>
                            </div>
                            <div className="post-area-wrapper">
                                <div className="user-section">
                                    <div className="user-avatar">
                                        <img src={user_placeholder} alt="" />
                                    </div>
                                    <div className="username">
                                        <p>Username</p>
                                    </div>
                                    <div className="post-content-wrapper">
                                        <p className="post-area">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className="like-comment-wrapper">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)"><img src={like_active} />500</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">500 Comments</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-btn-wrapper">
                                    <ul>
                                        <li className="active">
                                            <a href="#" className="icon-like"><img src={like} />like</a>
                                            <a href="#" className="icon-like-active"><img src={like_active} />like</a>
                                        </li>
                                        <li>
                                            <a href="#" className="icon-comment"><img src={comment} />Comment</a>
                                            <a href="#" className="icon-comment-active"><img src={comment_active} />Comment</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post-area-wrapper">
                                <div className="user-section">
                                    <div className="user-avatar">
                                        <img src={user_placeholder} alt="" />
                                    </div>
                                    <div className="username">
                                        <p>Username</p>
                                    </div>
                                    <div className="post-content-wrapper">
                                        <p className="post-area">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className="like-comment-wrapper">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)"><img src={like_active} />500</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">500 Comments</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-btn-wrapper">
                                    <ul>
                                        <li className="active">
                                            <a href="#" className="icon-like"><img src={like} />like</a>
                                            <a href="#" className="icon-like-active"><img src={like_active} />like</a>
                                        </li>
                                        <li>
                                            <a href="#" className="icon-comment"><img src={comment} />Comment</a>
                                            <a href="#" className="icon-comment-active"><img src={comment_active} />Comment</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5 right-section">
                        <div className="wall-right-wrapper">
                            <div className="user-section">
                                <div className="user-avatar">
                                    <img src={user_placeholder} alt="" />
                                </div>
                                <div className="username">
                                    <p>Username</p>
                                </div>
                                <div className="post-content-wrapper">
                                    <textarea placeholder="What's on your mind?" className="post-content" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="post-btn-wrapper">
                                <button type="button" className="btn-post btn btn-primary">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LandingPage;