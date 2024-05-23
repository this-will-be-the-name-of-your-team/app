import { createGlobalStyle } from "styled-components";
import Pretendard from "../fonts/PretendardVariable.woff2";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

    input {
        outline: none;
        border: none;
    }

    button {
        outline: none;
        border: none;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url(${Pretendard}) format('woff2');
  }
`;
