import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
//Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
	const location = useLocation();
	const pathId = location.pathname.split("/")[2];
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, []);
	const { popular, upcoming, latest, searched } = useSelector(
		(state) => state.games
	);

	return (
		<GameList>
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					{pathId && <GameDetails pathId={pathId} />}
				</AnimatePresence>
				{searched.length ? (
					<div className="searched">
						<h2>Searched Games</h2>
						<Games>
							{searched.map((game) => (
								<Game
									name={game.name}
									released={game.released}
									id={game.id}
									image={game.background_image}
								/>
							))}
						</Games>
					</div>
				) : ""}
				<h2>Upcoming Games</h2>
				<Games>
					{upcoming.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
						/>
					))}
				</Games>
				<h2>Latest Games</h2>
				<Games>
					{latest.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
						/>
					))}
				</Games>
				<h2>Popular Games</h2>
				<Games>
					{popular.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
						/>
					))}
				</Games>
				<br />
				<br />
				<br />
				<br />
			</AnimateSharedLayout>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
