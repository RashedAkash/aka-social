import React from 'react';
import Leftbar from '../../components/Leftbar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3">
            <Leftbar />
          </div>
          <div className="col-xl-6">
            <Feed />
          </div>
          <div className="col-xl-3">
            <Rightbar />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;