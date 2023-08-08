import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  // Accessing the 'url' property from the 'home' state using the useSelector hook
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  // Constructing the poster URL by appending the 'poster_path' to the base URL
  const posterUrl = data.poster_path ? url.poster + data.poster_path : PosterFallback;

  return (
    <div
      className="movieCard"
      onClick={() =>
        navigate(`/${data.media_type || mediaType}/${data.id}`)
      }
    >
      <div className="posterBlock">
        {/* Rendering the movie poster */}
        <Img className="posterImg" src={posterUrl} />

        {!fromSearch && (
          <React.Fragment>
            {/* Rendering the circle rating component */}
            <CircleRating rating={data.vote_average.toFixed(1)} />

            {/* Rendering the genres component */}
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )}
      </div>

      <div className="textBlock">
        {/* Displaying the movie title or name */}
        <span className="title">{data.title || data.name}</span>

        {/* Formatting and displaying the release date */}
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
