import React, { useState } from "react";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <>
      <div className="carouselSelection">
        <ContentWrapper>
          <span className="carouselTitle">Trending</span>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>

        <Carousel data={data?.results} loading={loading} />
      </div>
    </>
  );
};

export default Trending;
