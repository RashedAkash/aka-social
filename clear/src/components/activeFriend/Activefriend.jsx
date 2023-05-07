import './activefriend.css';

const Activefriend = ({Activefriend}) => {
  return (
    <div>
       <div className=" activeFriend-list">
        <ul>
          <li>
            <img src={Activefriend.photo} alt="" /> {Activefriend.name}
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Activefriend;