import React from "react";
import Signin from "../Components/Signin";



export default function Userinfosignin() {
  return (
    <div className="user-info"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div id="login-signupinfo"
        style={{ display: "flex", flexDirection: "row"}}
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
            <Signin />
          </div>
        </div>
      </div>
    </div>
  );
}
