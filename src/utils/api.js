import axios from "axios";

// The base URL for The Movie Database API
const BASE_URL = "https://api.themoviedb.org/3/";

// Your API token from environment variables (VITE_APP_TMDB_TOKEN)
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Headers containing authorization token
const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

// Function to fetch data from the API
// Params are optional and used in the explore page
export const fetchDataFromApi = async (url, params) => {
  try {
    // Sending a GET request using axios
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params: params,
    });

    return data; // Returning the fetched data
  } catch (err) {
    console.log(err); // Logging the error if it occurs
    return err; // Returning the error
  }
};
