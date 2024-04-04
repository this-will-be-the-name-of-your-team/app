import { keyframes } from "styled-components";

export const showModalLayoutAnimation = keyframes`
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
`;

export const closeModalLayoutAnimation = keyframes`
    from {        
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
