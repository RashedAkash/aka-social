import React from 'react';
import Share from '../Share/Share';
import Post from '../Post/Post';
import { Posts } from '../../dummyData';

const Feed = () => {
  return (
    <div>
      <Share />
      {Posts.map((p) => (
       <Post key={p.id} post={p} /> 
      ))}
       
       
      
     
      
      

    </div>
  );
};

export default Feed;