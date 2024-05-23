import styled from "styled-components";
import { font } from "@/styles/generator/font";
import { theme } from "@/styles/theme";

export const Page = styled.div`
  margin: 0 auto;
  padding: 0 18rem;
`;

export const GridBox = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const WorkText = styled.span`
  color: ${theme.primary[500]};
  ${font.D2_1};
`;

export const TitleText = styled.p`
  color: ${theme.gray[400]};

  ${font.p5};
`;

export const WriteButton = styled.button`
  cursor: pointer;

  width: 7.3rem;
  height: 2.5rem;

  background-color: ${theme.primary[500]};

  border-radius: 0.31rem;
  border: none;

  color: ${theme.base.white};
  ${font.p2};
  text-align: center;
`;
