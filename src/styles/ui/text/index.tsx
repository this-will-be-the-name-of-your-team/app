import { styled, css } from "styled-components";
import { TextAttribute } from "@/types/ui/TextAttributes.type";
import { font } from "@/styles/generator/font";

type Font = keyof typeof font;

const Text = ({
  fontType,
  color = "black",
  textAlign = "center",
  ellipsis = false,
  children,
}: TextAttribute) => {
  return (
    <Container fontType={fontType} ellipsis={ellipsis} style={{ color, textAlign }}>
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.div<{ fontType: Font; ellipsis: boolean }>`
  white-space: pre-line;
  ${({ fontType }) => font[fontType]};
  ${({ ellipsis }) =>
    ellipsis
      ? css`
          text-overflow: ellipsis;
        `
      : css`
          text-overflow: clip;
        `}
`;
