import styled from "styled-components";
import font from "@/styles/generator/font";

export const Page = styled.div`
    margin: 0 auto;

    padding: 0 18rem;
`;

export const GridBox = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8.8rem;
`;

export const GalleryText = styled.p`
    color: #FF9B73;

    ${font.D1}
`;

export const TitleText = styled.p`
    color: #999999;

    ${font.p3}
`;
