import { keyframes } from "styled-components";

export const showModalAnimation = keyframes`
    from {
        opacity: 0.1;
        transform: translateY(-10%) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0%) scale(1);
    }
`;

export const closeModalAnimation = keyframes`
    from {        
        opacity: 1;
        transform: translateY(0%) scale(1);
    }
    to {
        opacity: 0;
        transform: translateY(-10%) scale(0.9);
    }
`;
