import React from 'react'
import Updatesitemodal from './Updatesitemodal';
import { useState } from 'react';

export default function Sitesdetailsmodal(props) {
const [eye, setEye] = useState("password");
  const [isShown, setIsshown] = useState(false);
  function handleclick() {
    setIsshown(true);
  }
  function closeclick() {
    setIsshown(false);
  }
    function handleEye() {
      setEye("text");
      setTimeout(() => {
        setEye("password");
      }, 1000);
    }
   
    return (
      <div>
        <Updatesitemodal
          isShown={isShown}
          closeclick={closeclick}
          id={props.id}
          setCount={props.setCount}
        />
        <div
          id="myModal"
          className="sitedetailsmodal"
          style={{ display: props.isShown ? "block" : "none" }}
        >
          <div className="site-modal-content">
            <form>
              <div className="sitedetailspopup">
                <div className="sitedetailstextcontainer">
                  <span className="sitedetailstext">
                    Site Details 
                  </span>
                  <div
                    className="editbutton"
                    onClick={() => {
                      handleclick();
                      props.closeclick();
                    }}
                  >
                    <span className="edittext">Edit</span>
                  </div>
                </div>

                <div className="group-9">
                  <span className="urltext">URL</span>
                  <input
                    className="urlvalue"
                    type="text"
                    value={props.url}
                    readOnly
                  />
                </div>
                <div className="group-8">
                  <div className="sitebox">
                    <span className="site-name">Site Name </span>
                    <input
                      type="text"
                      className="site-value"
                      value={props.webname}
                      readOnly
                    />
                  </div>
                  <div className="sectorbox">
                    <span className="sector-name">Sector/Folder</span>
                    <div style={{ display: "flex" }} className="sector-value">
                      <input
                        type="text"
                        style={{ width: "307.5px", backgroundColor: "#F5F7FB" }}
                        value={props.sectorname}
                        readOnly
                      ></input>
                      <img
                        src="./images/downarrow.png"
                        alt=""
                        style={{ height: "20px", marginTop: "5px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="group-7">
                  <div className="namebox">
                    <span className="username-name">User Name </span>
                    <input
                      type="text"
                      className="username-value"
                      value={props.username}
                      readOnly
                    />
                  </div>
                  <div className="passwordbox">
                    <span className="Password-name">Site Password</span>
                    <div style={{ display: "flex" }} className="Password-value">
                      <input
                        type={eye}
                        style={{ width: "307.5px", backgroundColor: "#F5F7FB" }}
                        value={props.sitepassword}
                        readOnly
                      />
                      <img
                        src="./images/eye_on.png"
                        alt=""
                        style={{ height: "20px", marginTop: "5px" }}
                        onClick={() => {
                          handleEye();
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="group-6">
                  <span className="notestext">NOTES</span>
                  <input
                    className="notesvalue"
                    type="text"
                    value={props.notes}
                    readOnly
                  />
                </div>
              </div>
            </form>

            <div className="close-btn" onClick={props.closeclick}>
              <img src="./images/close_btn.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}
