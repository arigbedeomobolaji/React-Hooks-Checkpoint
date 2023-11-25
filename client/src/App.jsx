import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import useMoviesHooks, { initialMovieState } from "./reducers/useMoviesReducer";
import { useReducer } from "react";
import { MovieContext, MovieDispatchContext } from "./reducers/MovieContext";

export default function App() {
	const { movieReducer } = useMoviesHooks();
	const [state, dispatch] = useReducer(movieReducer, initialMovieState);
	return (
		<MovieContext.Provider value={state}>
			<MovieDispatchContext.Provider value={dispatch}>
				<Navbar />
				<Filter />
				<MovieList />
			</MovieDispatchContext.Provider>
		</MovieContext.Provider>
	);
}
