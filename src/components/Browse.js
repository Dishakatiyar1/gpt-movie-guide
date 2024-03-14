import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {usePopularMovies} from "../hooks/usePopularMovies";
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies";
import {useUpcomingMovies} from "../hooks/useUpcomingMovies";
import {useTopRatedMovies} from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
