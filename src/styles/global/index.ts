import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'PretendardVariable';
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    input {
        outline: none;
        border: none;
    }

    button {
        outline: none;
        border: none;
    }

    a {
        text-decoration: none;
    }

    p {
        margin: 0;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;
