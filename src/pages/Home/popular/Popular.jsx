import React, { useState } from "react";
// import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <>
      <div className="carouselSelection">
        <ContentWrapper>
          <span className="carouselTitle">What's Popular</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>

        <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
      </div>
    </>
  );
};

export default Popular;
