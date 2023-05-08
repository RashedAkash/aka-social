import React from 'react';
import logo from '../../imges/270034062_104135072145342_4304221713873365102_n.jpg';
import './header.css';
import { NavLink,Link } from 'react-router-dom';


const Header = () => {
  return (
    <div >
      <div className="Header-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="header-logo">
                <h3>Akashsocial</h3>
                
                
              </div>
            </div>
            <div className="col-xl-6">
              <div className="search">
                <form action="#">
                  <input type="text" placeholder='search anything' />
                  <i class="fas fa-search"></i>
                </form>
                
              </div>

            </div>
            <div className="col-xl-3">
              <div className="header-icon">
                <nav>
                  <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/Profile">Profile</a></li>
                </ul>
                </nav>
                <img className='logo' src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      
    </div>
  );
};

export default Header;