import './profile.css';
import Leftbar from '../../components/Leftbar';
import Feed from '../../components/Feed/Feed';

import pImg from '../../imges/2.jpeg';
import cImg from '../../imges/270034062_104135072145342_4304221713873365102_n.jpg';
const Profile = () => {
  return (
    <div className='Profile-area'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="profiles-img">
              <div className="cover-img">
                <img src={cImg} alt="" />
              </div>
              <div className="profile-img">
                <img src={pImg} alt="" />
                <div className="profile-title">
                <h2>Akash Amir <span className='nickName'>(Akash)</span></h2>
                <p>626 Friends</p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="row">
        
          <div className="col-xl-3">
            <Leftbar />
          </div>
          <div className="col-xl-9">
            <Feed />
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default Profile;