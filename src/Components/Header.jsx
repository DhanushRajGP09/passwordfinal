import React from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
   navigate("/");
  };

  return (
    <div>
      <div className="header">
        <div className="home-logo">
          <img src="/images/pass_logo.png" alt="" />
        </div>
        <div className="refresh">
          <img src="/images/sync.png" alt="" style={{ marginTop: "13px" }} />
        </div>
        <div className="dropdown">
          <img src="/images/profile.png" alt="" style={{ marginTop: "13px" }} />
          <div className="dropdown-content">
            <div style={{ display: "flex", cursor: "pointer" }}>
              <span className="change-password">Change Password</span>
              <div
                style={{
                  height: "22px",
                  width: "17px",
                  marginTop: "15px",
                  marginLeft: "30px",
                }}
              >
                <img src="./images/ic_pass.png" alt="" />
              </div>
            </div>
            <div className="line-2">
              <div style={{ display: "flex", cursor: "pointer" }}>
                <span
                  className="sign-out-copy"
                  onClick={() => {
                    logout();
                  }}
                >
                  Sign Out
                </span>
                <div
                  style={{
                    height: "22px",
                    width: "17px",
                    marginTop: "15px",
                    marginLeft: "90px",
                  }}
                >
                  <img src="./images/signouticon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
