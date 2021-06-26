const initState = {
	popular: [],
	latest: [],
	upcoming: [],
	searched: [],
};

const gamesReducers = (state = initState, action) => {
	switch (action.type) {
		case "FETCH_GAMES":
			return {
				...state,
				popular: action.payload.popular,
				upcoming: action.payload.upcoming,
				latest: action.payload.latest,
			};
		case "FETCH_SEARCHED":
			return {
				...state,
				searched: action.payload.searched,
			};
		case "CLEAR_SEARCHED":
			return {
				...state,
				searched: [],
			};
		default:
			return { ...state };
	}
};

export default gamesReducers;
