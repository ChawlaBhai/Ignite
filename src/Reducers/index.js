import gamesReducers from "./gamesReducers";
import detailsReducer from "./detailsReducer";
import { combineReducers } from "redux";

// const initState = {
// 	name: "",
// 	isLogged: false,
// };

// const userReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		default:
// 			return { ...state };
// 	}
// };

const rootReducer = combineReducers({
	games: gamesReducers,
	details: detailsReducer,
});

export default rootReducer;
