import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
const [mobilenumber , setmobilenumber] = useState("");
const [mpin, setMpin] = useState("");
const [reentermpin,setReentermpin] = useState("");
const [eye, setEye] = useState("password");
const navigate = useNavigate();
 function handleEye() {
   setEye("text");
   setTimeout(() => {
     setEye("password");
   }, 1000);
 }

useEffect(() => {
  const auth = localStorage.getItem("user");
  if (auth) {
    navigate("/");
  }
}, []);

const collectData = async () => {
  console.warn();
  let result = await fetch("http://localhost:5000/signup", {
    method: "post",
    body: JSON.stringify({ mobilenumber,mpin,reentermpin }),
    headers: {
      "Content-Type": "application/JSON",
    },
  });
  result = await result.json();
  console.warn(result);
  navigate("/");
  localStorage.setItem("user", JSON.stringify(result));
};



  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="signup-div">
        <span className="sign-up">SIGN UP</span>
        <div className="field-outline">
          <input
            className="mobile-number"
            placeholder="Enter Mobile Number"
            value={mobilenumber}
            onChange={(e) => setmobilenumber(e.target.value)}
            required
            maxLength={10}
          ></input>
        </div>
        <div className="field-outline" style={{ marginTop: "16px" }}>
          <input
            className="m-pin"
            placeholder="Enter 4 Digit MPin"
            type="password"
            value={mpin}
            onChange={(e) => setMpin(e.target.value)}
            required
            maxLength={4}
          />
        </div>
        <div className="field-outline" style={{ marginTop: "16px" }}>
          <input
            className="m-pin"
            placeholder="Re-Enter 4 Digit MPin"
            value={reentermpin}
            type={eye}
            onChange={(e) => setReentermpin(e.target.value)}
            required
            maxLength={4}
          />
          <div className="eye" onClick={handleEye}>
            <img src="/images/eye_on.png" alt="" />
          </div>
        </div>
      </div>
      <button
        className="signup-button-background"
        onClick={() => {
          collectData();
        }}
      >
        <span className="sign-up-button-text">SIGN UP</span>
      </button>
    </div>
  );
}

