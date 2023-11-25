import myMovies from "../movies";
let movies;
try {
	movies = JSON.parse(localStorage.getItem("movies")).movies;
} catch (e) {
	movies = myMovies;
	localStorage.setItem(
		"movies",
		JSON.stringify({ movies, counter: movies.length })
	);
}

export const initialMovieState = {
	movies,
	counter: movies.length,
};

export default function useMoviesHooks() {
	const movieReducer = (state, action) => {
		switch (action.type) {
			case "ADD_MOVIE":
				var newMovie = action.payload;
				newMovie.id = state.counter + 1;
				var newData = state.movies.concat(newMovie);
				localStorage.setItem(
					"movies",
					JSON.stringify({ movies: newData, counter: newMovie.id })
				);
				return { movies: newData, counter: newMovie.id };
			case "GET_MOVIES":
				return JSON.parse(localStorage.getItem("movies"));
			case "FILTER_MOVIES":
				var filterOption = action.payload;
				var title = filterOption.title.toLowerCase();
				var rating = filterOption.rating;
				state = JSON.parse(localStorage.getItem("movies"));
				var filteredMovies;
				if (title && rating) {
					filteredMovies = state.movies.filter((movie) =>
						movie.title.toLowerCase().includes(title)
					);
					filteredMovies = filteredMovies.filter(
						(movie) => movie.rating === rating
					);
					return { ...state, movies: filteredMovies };
				}
				if (title) {
					filteredMovies = state.movies.filter((movie) =>
						movie.title.toLowerCase().includes(title)
					);
					return { ...state, movies: filteredMovies };
				}
				if (rating) {
					filteredMovies = state.movies.filter(
						(movie) => movie.rating === rating
					);
					return { ...state, movies: filteredMovies };
				}
				return state;
			default:
				return state;
		}
	};

	return { movieReducer };
}
