import React from 'react';
import './leftbar.css'
import {Posts} from '../dummyData'
import FriendList from './friendList/FriendList';

const Leftbar = () => {
  return (
    <div className='left-bar'>
      <div className="leftbar-list">
        <ul>
          <li><i class="fa-solid fa-house"></i>home</li>
          <li><i class="fa-brands fa-facebook-messenger"></i> massenger</li>
          <li><i class="fa-solid fa-user-group"></i>group</li>
          <li><i class="fa-solid fa-shop"></i> Shop</li>
          
          <li><i class="fa-solid fa-user"></i> user</li>
          <li><i class="fa-brands fa-twitter"></i> twitter</li>
          <li><i class="fa-brands fa-instagram"></i> instagram</li>
          <li><i class="fa-solid fa-calendar-days"></i> Days</li>
          <li><i class="fa-solid fa-comment"></i>comment</li>

          <button>Show more</button>
          <hr />
         
        </ul>
      </div>
      {
        Posts.map((f) => (
          <FriendList key={f.id} friendList={f} />
        ))
     }
      
    </div>
  );
};

export default Leftbar;