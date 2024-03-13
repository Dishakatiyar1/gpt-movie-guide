import {useDispatch} from "react-redux";
import {addTrailerVideo} from "../utils/moviesSlice";
import {useEffect} from "react";
import {API_OPTIONS} from "../utils/constants";

export const useMovieTrailer = movieId => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json_data = await data.json();
    console.log("movie trailer", json_data);

    const trailerData = json_data?.results?.filter(
      video => video.type == "Trailer"
    );
    const trailer = trailerData?.length ? trailerData[0] : json_data[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
