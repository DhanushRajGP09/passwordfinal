import React from "react";

export default function Sidemenu() {
  return (
    <div>
      <div className="side-menu">
        <div className="side-menu-rectangle">
          <div className="burger-menu">
            <div className="rectangle1"></div>
            <div
              className="rectangle1"
              style={{ width: "40px", marginTop: "7.78px" }}
            ></div>
            <div
              className="rectangle1"
              style={{ width: "40px", marginTop: "7.78px" }}
            ></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="side-focus"></div>
            <div className="home-icn">
              <img src="/images/home_icn.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
