import React from 'react'
import { useState,useEffect} from 'react';
import Header from '../Components/Header';
import Modal from '../Components/Modal';
import Searchbar from '../Components/Searchbar';
import Sidemenu from '../Components/Sidemenu';
import Sitescontainer from '../Components/Sitescontainer';
import Sitesdetailsmodal from '../Components/Sitesdetailsmodal';



export default function Homepage() {
const [data, setData] = useState([]);
const [isShown,setIsshown] = useState(false);
const [detailsShown,setdetailsShown] = useState(false);
let [count, setCount] = useState(0);
const [url, seturl] = useState("google");
const [sitename, setSitename] = useState("");
const [sectorname, setSectorname] = useState("");
const [username, setUsername] = useState("");
const [sitepassword, setSitepassword] = useState("");
const [notes, setNotes] = useState("");
const [id,setId] = useState("")


function handleclick(){
    setIsshown(true)
}
function handledetailsmodal(){
    setdetailsShown(true)
}
function closedetailsmodal() {
  setdetailsShown(false);
}

function closeclick(){
    setIsshown(false)
}


const sitesdata = async () => {
  let url = "http://localhost:5000/data";
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setData(parsedData);
  setCount(document.getElementsByClassName("container01").length);
};

const sitesdetails = async (id) => {
  let url = `http://localhost:5000/data/${id}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  seturl(parsedData.url);
  setSitename(parsedData.webname);
  setSitepassword(parsedData.sitepassword);
  setNotes(parsedData.notes);
  setUsername(parsedData.username);
  setSectorname(parsedData.sectorname);
    setId(id)
};

 useEffect(() => {
   sitesdata();
   console.warn("useeffect");
 }, []);

  return (
    <div className="homepage">
      <Modal isShown={isShown} closeclick={closeclick} />
      <Sitesdetailsmodal
        isShown={detailsShown}
        handleclick={handledetailsmodal}
        closeclick={closedetailsmodal}
        notes={notes}
        url={url}
        webname={sitename}
        sitepassword={sitepassword}
        username={username}
        sectorname={sectorname}
        id={id}
        setCount={setCount}
      />
      <div className="sidemenu">
        <Sidemenu />
      </div>
      <div>
        <Header />
      </div>
      <div className="searchbar">
        <Searchbar handleclick={handleclick} />
      </div>

      <Sitescontainer
        data={data}
        count={count}
        setIsshown={setdetailsShown}
        handleclick={handledetailsmodal}
        closeclick={closedetailsmodal}
        sitesdetails={sitesdetails}
      />
    </div>
  );
}
