import {
  closeModalLayoutAnimation,
  showModalLayoutAnimation,
} from "@/styles/animations/modalLayout";
import { ModalLayoutProptypes } from "@/types/components/modalLayoutAttributes.type";
import { css, styled } from "styled-components";

const ModalLayout = (options: ModalLayoutProptypes) => {
  return <Container {...options}>{options.children}</Container>;
};

export default ModalLayout;

const Container = styled.div<ModalLayoutProptypes>`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  ${({ brightness = "100%", blur = "0px" }) => css`
    backdrop-filter: blur(${blur});
    backdrop-filter: brightness(${brightness});
  `};

  ${({ animationState }) => css`
    animation: 0.25s ease-in-out
      ${animationState ? showModalLayoutAnimation : closeModalLayoutAnimation} forwards;
  `}
`;
