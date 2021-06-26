import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
	dispatch({
		type: "LOADING_DETAIL",
	});

	//Fetch Details
	const detailData = await axios.get(gameDetailsURL(id));
	const screenshots = await axios.get(gameScreenshotsURL(id));

	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screen: screenshots.data,
		},
	});
};
