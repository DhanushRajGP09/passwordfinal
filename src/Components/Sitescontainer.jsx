import React from 'react';
import Sitesdetailsmodal from './Sitesdetailsmodal';
import copy from "copy-to-clipboard"; 


export default function Sitescontainer(props) {
  const Copypassword =(sitepassword)=>  {
      copy(sitepassword);
  }

  
  return (
      <div className="sites">
        <Sitesdetailsmodal
          id={props._id}
        />
        <div className="category">
          <span className="social-media">Social Media</span>
          <div className="oval1">
            <span className="a07">{props.count}</span>
          </div>
          <div className="path-copy">
            <img src="/images/downarrow.png" alt="" />
          </div>
        </div>
        <div className="sitescontainer">
          {props.data.map((item) => {
            return (
              <div className="container01">
                <div className="site-details">
                  <div className="bitmap">
                    <img src={`/images/${item.webname}.png`} alt="" />
                  </div>
                  <span
                    className="webname"
                    onClick={() => {
                      props.sitesdetails(item._id);

                      props.handleclick();
                    }}
                  >
                    {item.webname}
                  </span>
                  <div className="copy" onClick={()=>{Copypassword(item.sitepassword)}}>
                    <img src="/images/copy.png" alt="" />
                    <span className="copy-password">Copy Password</span>
                  </div>
                </div>
                <span className="www-facebook-com">{item.url}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
}
