import React, { useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Popular</span>
                <SwitchTabs data={["Movies", "Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Popular;
