import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.39rem;
        }
        &::-webkit-scrollbar-thumb {
            background: darkgray;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2 {
        font-family: 'Abril Fatface', cursive;
        font-size: 3rem;
        font-weight: lighter;
        color: #FF7676;
    }
    h3 {
        font-size: 1.13rem;
        padding: 1.3rem 0rem;
        color: #333; 
    }
    p {
        font-size: 0.81rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
        color: #333; 
    }
    img {
        display: block;
    }
    input {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyles;
