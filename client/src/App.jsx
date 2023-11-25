import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import useMoviesHooks, { initialMovieState } from "./reducers/useMoviesReducer";
import { useReducer } from "react";
import { MovieContext, MovieDispatchContext } from "./reducers/MovieContext";

export default function App() {
	// reducer for fetching and and working with the movies data
	const { movieReducer } = useMoviesHooks();
	// useReducer to manage the state and action that can be performed on the movies data
	const [state, dispatch] = useReducer(movieReducer, initialMovieState);
	// I created Two context so as to avoid props drilling
	return (
		<MovieContext.Provider value={state}>
			<MovieDispatchContext.Provider value={dispatch}>
				{/* Navbar */}
				<Navbar />
				{/* Filter Section */}
				<Filter />
				{/* MovieList Section */}
				<MovieList />
			</MovieDispatchContext.Provider>
		</MovieContext.Provider>
	);
}
