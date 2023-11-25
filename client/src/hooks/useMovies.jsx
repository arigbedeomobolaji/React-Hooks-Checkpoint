import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../reducers/MovieContext";

export default function useMovies() {
	const state = useContext(MovieContext);
	const [movies, setMovies] = useState(state.movies);

	useEffect(() => {
		setMovies(state.movies);
	}, [state.movies]);

	return movies;
}
