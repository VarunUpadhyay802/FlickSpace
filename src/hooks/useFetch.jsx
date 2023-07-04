//useFetch is custom hook in this case A custom hook in React is a JavaScript function that uses built-in hooks 
//(like useState, useEffect, etc.) to create reusable logic that can be shared across multiple components.
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    // states will hold the fetched data, loading status, and
    //  any error that occurs during the API call.
    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);
        //loading state to false to indicate that the fetching is complete
        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);
    // When any of the dependencies listed in the array change,
    // the effect will be triggered again, the dependency is url
    return { data, loading, error };
};

export default useFetch;