import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState("");
	const searchHandler = (e) => {
		e.preventDefault();
		dispatch(fetchSearch(textInput));
		setTextInput("");
	};
	const clearSearched = () => {
		dispatch({ type: "CLEAR_SEARCHED" });
	};

	return (
		<StyledNav>
			<Logo onClick={clearSearched}>
				<img src={logo} alt="logo" />
				<h1>Ignite</h1>
			</Logo>
			<form className="search" onSubmit={searchHandler}>
				<input
					value={textInput}
					type="text"
					onChange={(e) => setTextInput(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.div)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		outline: none;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		clip-path: inset(-30px 0px -30px -30px);
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
		clip-path: inset(-30px -30px -30px 0px);
	}
`;
const Logo = styled(motion.div)`
	display: flex;
	cursor: pointer;
	padding: 1rem;
	justify-content: center;
	img {
		margin: 4px;
		width: 2rem;
		height: 2rem;
	}
`;

export default Nav;
