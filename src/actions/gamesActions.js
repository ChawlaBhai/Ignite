import axios from "axios";
import {
	popularGamesURL,
	upcomingGamesURL,
	latestGamesURL,
	searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
	//Fetch Axios
	const popularData = await axios.get(popularGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());
	const latestData = await axios.get(latestGamesURL());

	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			latest: latestData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	//Fetch Axios
	const searchedData = await axios.get(searchGameURL(game_name));

	dispatch({
		type: "FETCH_SEARCHED",
		payload: {
			searched: searchedData.data.results,
		},
	});
}; 
