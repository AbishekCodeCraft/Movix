import React from "react";
import "./style.css";
import Herobanner from "./heroBanner/Herobanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <Herobanner />
        <Trending/>
        <Popular/>
        <TopRated/>
        {/* <div style={{ height: 1000 }}></div> */}
      </div>
    </>
  );
};

export default Home;
