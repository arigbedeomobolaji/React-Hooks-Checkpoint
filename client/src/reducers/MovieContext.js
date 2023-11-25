import { createContext } from "react";
// import movies from "../movies";

export const MovieContext = createContext({
	movies: null,
});
export const MovieDispatchContext = createContext(null);
