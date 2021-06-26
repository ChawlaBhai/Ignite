//Base URL
const base_url = "https://api.rawg.io/api";

//Api Key
const key = "&key=37748d8312e1462496e6c19eee3af89c";

//getting the date
const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) return `0${day}`;
	else return day;
};
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) return `0${month}`;
	else return month;
};

//current day/month/year
const day = getCurrentDay();
const month = getCurrentMonth();
const year = new Date().getFullYear();
const currentDate = `${year}-${month}-${day}`;
const lastYear = `${year - 1}-${month}-${day}`;
const nextYear = `${year + 1}-${month}-${day}`;

//fetch games
const popular_games = `/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const latest_games = `/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

//exports
export const popularGamesURL = () => base_url + popular_games + key;
export const upcomingGamesURL = () => base_url + upcoming_games + key;
export const newGamesURL = () => base_url + latest_games + key;
//Game Details
export const gameDetailsURL = (gameID) =>
	base_url + "/games/" + gameID + "?" + key;
//Game Screenshots
export const gameScreenshotURL = (gameID) =>
	base_url + "/games/" + gameID + "/screenshots?" + key;
//Search Game URL
export const searchGameURL = (game_name) =>
	base_url + "/games?search=" + game_name + "&page_size=9" + key;
