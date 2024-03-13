import React from "react";
import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMovies);
  // return if movies is null, otherwise it will throungh error
  // this will not render next lines of code
  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  console.log("movies", movies);

  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
