import Axios from "axios";
import { NextResponse } from "next/server";

export const getMovies = async () => {
  const response = await Axios.get("https://yts.mx/api/v2/list_movies.json");
  return NextResponse.json(response.data.data.movies);
};

export const getAnimes = async () => {
  console.log("Hello i'm an anime");
};
