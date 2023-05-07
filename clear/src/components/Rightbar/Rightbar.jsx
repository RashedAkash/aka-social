import './rightbar.css';
import bImg from '../../imges/download.jpg'
import { Posts } from '../../dummyData';
import Activefriend from '../activeFriend/Activefriend';

const Rightbar = () => {
  return (
    <div className='leftBar-area'>
      <div className="birthDay-title">
        <h4>Birthday</h4>
      </div>
      <div className="birthday">
        
        <div className="birthday-img">
          <img src={bImg} alt="" />
        </div>
        <div className="birthday-text">
          <p><b>Babar Azam</b> and <b>3 other friends</b> have a Birthday today!</p>
        </div>

      </div>

      {
        Posts.map((af) => (
          <Activefriend key={af} Activefriend={af} />
        ))
      }
    </div>
  );
};

export default Rightbar;