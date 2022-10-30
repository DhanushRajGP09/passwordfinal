import React from 'react';
import { useState } from 'react';

export default function Updatesitemodal(props) {
   const [url, seturl] = useState(props.url);
   const [webname, setWebname] = useState(props.webname);
   const [sectorname, setSectorname] = useState(props.sectorname);
   const [username, setUsername] = useState(props.username);
   const [sitepassword, setSitepassword] = useState(props.sitepassword);
   const [eye, setEye] = useState("password");
   const [notes, setNotes] = useState("");
   function handleEye() {
     setEye("text");
     setTimeout(() => {
       setEye("password");
     }, 1000);
   }
   const update = async (id) => {
     console.warn(url, webname, sectorname, username, sitepassword, notes);
     let result = await fetch(`http://localhost:5000/data/${id}`, {
       method: "put",
       body: JSON.stringify({
         url,
         webname,
         sectorname,
         username,
         sitepassword,
         notes,
       }),
       headers: {
         "Content-Type": "application/JSON",
       },
     });
     result = await result.json();
     console.warn(result);
   };
  
    return (
      <div>
        <div
          id="myModal"
          className="Updatemodal"
          style={{ display: props.isShown ? "block" : "none" }}
        >
          <div className="modal-content">
            <form action="">
              <div className="popup">
                <span className="Siteedit ">Edit</span>
                <div className="group-9">
                  <span className="urltext">URL</span>
                  <input
                    className="urlvalue"
                    type="text"
                    value={url}
                    onChange={(e) => seturl(e.target.value)}
                  />
                </div>
                <div className="group-8">
                  <div className="sitebox">
                    <span className="site-name">Site Name</span>
                    <input
                      type="text"
                      className="site-value"
                      value={webname}
                      onChange={(e) => setWebname(e.target.value)}
                    />
                  </div>
                  <div className="sectorbox">
                    <span className="sector-name">Sector/Folder</span>
                    <div style={{ display: "flex" }} className="sector-value">
                      <input
                        type="text"
                        style={{ width: "307.5px", backgroundColor: "#F5F7FB" }}
                        value={sectorname}
                        onChange={(e) => setSectorname(e.target.value)}
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
                    <span className="username-name">User Name</span>
                    <input
                      type="text"
                      className="username-value"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="passwordbox">
                    <span className="Password-name">Site Password</span>
                    <div style={{ display: "flex" }} className="Password-value">
                      <input
                        type={eye}
                        style={{ width: "307.5px", backgroundColor: "#F5F7FB" }}
                        value={sitepassword}
                        onChange={(e) => setSitepassword(e.target.value)}
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
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                <button
                  className="Update"
                  name="submit"
                  value="submit"
                  onClick={() => {
                    update(props.id);
                  }}
                >
                  <span className="save">UPDATE</span>
                </button>
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
