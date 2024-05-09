import { createGlobalStyle } from "styled-components";
import Pretendard from "../fonts/PretendardVariable.woff2";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

    input {
        outline: none;
    }

    button {
        outline: none;
    }

    @font-face {
        font-family: 'PretendardVariable';
        src: local('PretendardVariable'), local('PretendardVariable');
        font-style: normal;
        src: url(${Pretendard}) format('woff2');
  }
`;
