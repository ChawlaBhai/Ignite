import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
//Stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathId }) => {
	const history = useHistory();

	//Exit event handler
	const exitEventHandler = (e) => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};

	//Platform icons
	const getPlatform = (platform) => {
		switch (platform) {
			case "PlayStation 4":
				return playstation;
			case "Xbox One":
				return xbox;
			case "iOS":
				return apple;
			case "PC":
				return steam;
			case "Nintendo Switch":
				return nintendo;
			default:
				return gamepad;
		}
	};

	//Data
	const { game, screen, isLoading } = useSelector((state) => state.details);

	//Get Stars
	const getStars = () => {
		const stars = [];
		const rating = Math.floor(game.rating);
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<img alt="star" key={i} src={starFull} />);
			} else {
				stars.push(<img alt="star" key={i} src={starEmpty} />);
			}
		}
		return stars;
	};

	return (
		<div>
			{!isLoading && (
				<CardShadow className="shadow" onClick={exitEventHandler}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className="rating">
								<motion.h3 layoutId={`title ${pathId}`}>
									{game.name}
								</motion.h3>
								<p>Rating: {game.rating}</p>
								{getStars().map((star) => star)}
							</div>
							<Info>
								<h3>Platform</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<img
											key={game.platforms.id}
											src={getPlatform(
												data.platform.name
											)}
											alt=""
										/>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<motion.img
								layoutId={`image ${pathId}`}
								src={smallImage(game.background_image, 1280)}
								alt=""
							/>
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className="gallery">
							{screen.results.map((scr) => (
								<img
									key={scr.id}
									src={smallImage(scr.image, 1280)}
									alt=""
								/>
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</div>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.39rem;
	}
	&::-webkit-scrollbar-thumb {
		background: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 2rem;
		height: 2rem;
		display: inline;
	}
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
`;
const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;

export default GameDetails;
