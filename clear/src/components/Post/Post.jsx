import React, { useState } from 'react';
import './post.css'

import { Users } from '../../dummyData';


const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);
  
  const clickHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked)
  }
  
  
  return (
    <div>
      <div className="Post-area">
        <div className="row">
          <div className="col-xl-6">
            <div className="top-post">
          <div className="post-img">
             <img src={post.photo} alt="" />
         </div>
          <div className="post-text">
                <h4>{Users.filter(u=>u.id=== post.userId)[0].userName }</h4>
                <span>{post.date }</span>
          </div>
         
        </div>
          </div>
          <div className="col-xl-6">
             <div className="post-icon ">
            <i class="fa-solid fa-comment-dots"></i>
            <i class="fa-regular fa-rectangle-xmark"></i>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="main-img">
              <img src={post.photo} alt="" />
            </div>
          </div>
        </div>
        <div className="like-comment">
           <div className="row">
         <div className="col-xl-6">
            <div className="post-like">
              <div className="like-icon">
                <span className='like'><i onClick={clickHandler} class="fa-solid fa-thumbs-up"></i></span>
                <span className='love'><i onClick={clickHandler} class="fa-solid fa-heart"></i></span>
              </div>
              <div className="like-text">
                  <span>{like}</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="post-comment">
                <span className='commment'>{post.Comment}</span>
                <span>{post.share}</span>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
           
            <div className="like-cmnt-share">
              <i onClick={clickHandler} class="fa-solid fa-thumbs-up"></i><span onClick={clickHandler}>Like</span>
              </div>
           
          </div>
          <div className="col-xl-4">
            
            <div className="like-cmnt-share text-center">
                <i class="fa-solid fa-comment"></i><span>Comment</span>
            </div>
            
          </div>
          <div className="col-xl-4">
            
            <div className="like-cmnt-share text-right">
              <i class="fa-solid fa-share"></i><span>Share</span>
              </div>
            
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Post;