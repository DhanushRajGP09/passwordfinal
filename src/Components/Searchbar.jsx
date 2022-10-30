import React from 'react'

export default function Searchbar(props) {
  return (
    <div>
      <div className="header-down2" style={{ display: "flex" }}>
        <div className="header-down">
          <span className="sites-text">Sites</span>
          <div className="heading-focus"></div>
        </div>
        <div
          className="search-icn"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex" }}>
            <input className="search" placeholder="search"></input>
            <div
              className="search-icon-div"
              style={{ cursor: "pointer" }}
            >
              <img src="/images/search.png" alt=""  />
            </div>
          </div>
          <div className="search-bottom"></div>
        </div>
        <div className="add-btn">
          <img src="/images/add.png" alt="" onClick={props.handleclick} />
        </div>
      </div>
    </div>
  );
}
