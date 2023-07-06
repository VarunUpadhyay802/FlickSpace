import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";

const SearchResult = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    // Function to fetch initial data
    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    // Function to fetch next page data
    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    // If previous data exists, append new results to it
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results],
                    });
                } else {
                    // Otherwise, set the new results as the data
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div className="searchResultsPage">
            {loading && <Spinner initial={true} />} {/* Show spinner if loading */}
            {!loading && (
                <ContentWrapper>
                    {data?.results?.length > 0 ? (
                        // If there are results, display them
                        <>
                            <div className="pageTitle">
                                {`Search ${data?.total_results > 1
                                    ? "results"
                                    : "result"
                                    } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData} // Call fetchNextPageData when scrolling to the bottom
                                hasMore={pageNum <= data?.total_pages} // Check if there are more pages to load
                                loader={<Spinner />} // Show spinner while loading next page
                            >
                                {data?.results.map((item, index) => {
                                    // eslint-disable-next-line array-callback-return
                                    if (item.media_type === "person") return; // Exclude items of media_type 'person'
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        // If no results found
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
                </ContentWrapper>
            )}
        </div>
    );
};

export default SearchResult;
