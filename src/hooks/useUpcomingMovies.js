import {useDispatch} from "react-redux";
import {API_OPTIONS, DUMMY_UPCOMING_MOVIES} from "../utils/constants";
import {useEffect} from "react";
import {addUpcomingMovies} from "../utils/moviesSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    // const data = await fetch(
    //   `https://api.themoviedb.org/3/movie/upcoming`,
    //   API_OPTIONS
    // );
    // const json_data = await data.json();
    // dispatch(addUpcomingMovies(json_data.results));

    // *** due to changes in API, use static data
    dispatch(addUpcomingMovies(DUMMY_UPCOMING_MOVIES));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
