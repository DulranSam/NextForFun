"use client";

import React, { useEffect, useState } from "react";
import { getMovies, getAnimes } from "../lib/getMovies";

import Registration from "./Registration";

const About = () => {
  const [data, setData] = useState([]);

  const setMovies = async () => {
    const response = await getMovies();
    setData(response);
  };

  useEffect(() => {
    setMovies();
  }, []);

  return (
    <div>
      <h1>About</h1>
      <p>{JSON.stringify(data)}</p>
      <button onClick={getAnimes}>ANIMEEEEE</button>
      <Registration></Registration>
    </div>
  );
};

export default About;
