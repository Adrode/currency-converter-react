import { createGlobalStyle } from "styled-components";
import background from "./images/backgroundImage.jpg";

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

        background-color: ${({ theme }) => theme.color.mineShaft};
        color: ${({ theme }) => theme.color.gallery};

        word-break: break-word;

        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
`;