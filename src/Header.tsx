import React from 'react';
// import Button from './Button';
import './Header.css';
// import Logo from './Logo'

export const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="content-container">
          {/* <Logo /> */}
          <div className="flex-container nav-items-wrapper">
            <div className="items-left-wrapper">
              <div className="items-list-wrapper">
                <ul className="items-ul">
                  <li className="items-list">
                    <a className="items-list-text">Menu</a>
                  </li>
                  <li className="items-list padding-left">
                    <a className="items-list-text">Rewards</a>
                  </li>
                  <li className="items-list padding-left">
                    <a className="items-list-text">Gift Cards</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-ul items-right-wrapper">
              <div className="items-right-list">
                <a className="items-right-text">
                  <svg className="map-location">
                    <path
                      className="path"
                      d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"
                    ></path>
                  </svg>
                  Find a store
                </a>
                {/*
                                <Button text={"Sign in"} className={"white"}/>
                                <Button text={"Join now"} className={"black"}/>
                                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
