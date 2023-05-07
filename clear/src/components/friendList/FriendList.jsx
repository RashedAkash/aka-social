import './friendList.css';

const FriendList = ({friendList}) => {

  return (
    <div>
       <div className="friend-list">
        <ul>
          <li>
            <img src={friendList.photo} alt="" /> {friendList.name}
          </li>
         
        </ul>
      </div>
      
    </div>
  );
};

export default FriendList;