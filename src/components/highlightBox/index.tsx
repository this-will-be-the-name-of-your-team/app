import { font } from "@/styles/generator/font";
import { theme } from "@/styles/theme";
import Column from "@/styles/ui/column";
import Text from "@/styles/ui/text";
import { HighlightBoxProperties } from "@/types/components/highlightBoxPropertiestype";
import Image from "next/image";
import { styled } from "styled-components";

const HighlightBox = ({ year, content, backgroundImg }: HighlightBoxProperties) => {
  return (
    <Container>
      <ImgSection>
        <Image
          fill
          alt="highlightbox"
          src={`/landing/highlights1.png`}
          objectFit="cover"
          style={{ filter: "brightness(80%)" }}
        />
        <YearText>{year}</YearText>
      </ImgSection>
      <Column width="100%" alignItems="center" gap={1}>
        {content.map((e) => (
          <Text fontType="p1">{e}</Text>
        ))}
      </Column>
    </Container>
  );
};

export default HighlightBox;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImgSection = styled.section`
  height: 12rem;

  position: relative;
`;

const YearText = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;

  ${font.H3};
  color: ${theme.primary[500]};
`;
