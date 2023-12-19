import React from "react";
import video from "../videoBg.mp4"


const Home = () => {
  return (
    <>
    <div id="main">
      <div id="page-1">
      <video className="videoBg" autoPlay muted loop src={video}></video>
      <div className="content vh-100">
        <nav className="help">
        </nav>
        <h1 className="homeMainFont">FurnitureArena</h1>
      </div>
    </div> 
    </div>
    <div> 
    </div>
    </>
  );
};
export default Home;
