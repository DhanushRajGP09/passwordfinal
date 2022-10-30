import React from 'react'
import Signup from '../Components/Signup';

export default function Userinfosignup() {
  return (
    <div
      id="user-info"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        id="login-signupinfo"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="login-div">
          <div className="login-inside-div">
            <img className="logo" src="/images/logo.png" alt="" />
            <p className="protect-manage-eve">
              Protect & Manage every password in your business
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}
