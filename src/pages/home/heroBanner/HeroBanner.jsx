import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };


  const onChange = (e) => {
    setQuery(e.target.value);
  };


  return (
    <div>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background} />
          </div>
        )}
        <div className="opacity-layer">

        </div>
        <ContentWrapper>
          <div className="wrapper">
            <div className="heroBannerContent">
              <span className="title">Welcome.</span>
              <span className="subtitle">
                Immerse Yourself in the Cinematic Universe!
              </span>
              <div className="searchInput">
                <input
                  type='text'
                  placeholder='Search for a movie or tv show...'
                  onKeyUp={searchQueryHandler}
                  onChange={onChange}
                />
                <button onClick={()=>{}}>Search</button>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroBanner;
