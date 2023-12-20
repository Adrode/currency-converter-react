import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0px auto;
        padding: 40px;
        max-width: 600px;
        font-family: 'Montserrat', sans-serif;

        background-color: #333;
        color: #eee;

        word-break: break-word;

        background-image: url("images/lightBackground.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
`;