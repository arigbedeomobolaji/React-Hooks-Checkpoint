/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../reducers/MovieContext";

function MovieList() {
	const state = useContext(MovieContext);
	const [movies, setMovies] = useState(state.movies);

	useEffect(() => {
		setMovies(state.movies);
	}, [state.movies]);

	return (
		<div className="flex flex-col pb-5">
			<div className="max-w-7xl mx-3 my-5 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-start md:justify-items-center">
				{movies.map((movie) => (
					<MovieCard {...movie} key={movie.id} />
				))}
			</div>
			<div className="mb-5"></div>
		</div>
	);
}

export default MovieList;
