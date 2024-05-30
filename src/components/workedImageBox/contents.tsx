import styled from "styled-components";

export const ContentBox = ({img}:{img:string}) => {
    return(<Box img={img}></Box>);
}

const Box = styled.div<{img:string}>`
    /* width: fit-content; */
    width: 50%;
    height: auto;
    min-height: 18rem;

    background-color: black;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: contain;
`;
