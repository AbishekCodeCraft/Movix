import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDJjNDc2ZWRkMTdmZDY5ZmRmNDIwOWE0N2U4MWZmZSIsInN1YiI6IjY2MDI2YWIzMDQ3MzNmMDE3ZGYwMTEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11jzjzbIOxyVSJ82XC7vI6I4AYbMUaP5dKq6JyEKdYI";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
