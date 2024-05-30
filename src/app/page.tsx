"use client";

import { font } from "@/styles/generator/font";
import { theme } from "@/styles/theme";
import Row from "@/styles/ui/row";
import { CSSProperties, styled } from "styled-components";
import Image from "next/image";
import Mood1 from "@/styles/svg/mood1";
import Mood2 from "@/styles/svg/mood2";
import { HIGHLIGHTS_INFO } from "@/constants/landing";
import HighlightBox from "@/components/highlightBox";
import Column from "@/styles/ui/column";
import Link from "next/link";
import ArrowIcon from "@/styles/svg/arrowIcon";
import Text from "@/styles/ui/text";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
      <LandingSection>
        <LandingSectionImg alt="landingImg" src="/landing/landingImg.jpg" fill objectFit="cover" />
        <MainText>MINGLE MOOD</MainText>
        <Row width="100%" justifyContent="center">
          <DetailInfobutton>자세히 알아보기</DetailInfobutton>
        </Row>
      </LandingSection>
      <Section pageName="ABOUT">
        <Mood1 />
        <DescText>
          우리는 단순한 관광을 넘어섭니다. 로컬의 정취를 고스란히 담은 장소에서, <br />
          커뮤니티 중심의 경험과 시각적 콘텐츠를 통해 사용자와의 깊은 소통을 추구합니다.
          <br /> 지역 문화의 다양성을 전파하고 브랜딩함으로써, 젊은 세대와의 교류를 활성화하는
          서비스를 설계합니다.
          <br />
          이는 모든 이가 참여하고 즐길 수 있는 커뮤니티 서비스입니다.
          <br /> 우리와 함께 지역의 매력을 새롭게 발견하고, 소통하며 성장하는 여정과 함께해요.
        </DescText>
        <VisionSectionBackgroundImg>
          <Image alt="landingImg" src="/landing/visionBackgroundImg.jpg" fill />
        </VisionSectionBackgroundImg>
      </Section>
      <Section pageName="HIGHLIGHTS">
        <Mood2 />
        <HighlightBoxSection>
          {HIGHLIGHTS_INFO.map((e, i) => (
            <HighlightBox year={e.year} content={e.content} backgroundImg={i + 1} />
          ))}
        </HighlightBoxSection>
      </Section>
      <WorkSection pageName="WORK">
        <Column gap={1.2} width="75%">
          <WorkLinkButton>
            <Link style={{ color: theme.gray[400] }} href={"/works"}>
              더보기 <ArrowIcon color={theme.gray[400]} deg={270} />
            </Link>
          </WorkLinkButton>
          <WorkBoxSection>
            <WorkBox width="65%" content="빅루프페스티벌">
              <WorkBoxImage
                alt="workboxImg"
                src="/landing/highlights1.png"
                fill
                objectFit="cover"
              />
            </WorkBox>
            <WorkBox width="34%" content="빅루프페스티벌">
              <WorkBoxImage
                alt="workboxImg"
                src="/landing/highlights1.png"
                fill
                objectFit="cover"
              />
            </WorkBox>
            <WorkBox width="34%" content="빅루프페스티벌">
              <WorkBoxImage
                alt="workboxImg"
                src="/landing/highlights1.png"
                fill
                objectFit="cover"
              />
            </WorkBox>
            <WorkBox width="65%" content="빅루프페스티벌">
              <WorkBoxImage
                alt="workboxImg"
                src="/landing/highlights1.png"
                fill
                objectFit="cover"
              />
            </WorkBox>
            <WorkBox width="100%" content="빅루프페스티벌">
              <WorkBoxImage
                alt="workboxImg"
                src="/landing/highlights1.png"
                fill
                objectFit="cover"
              />
            </WorkBox>
          </WorkBoxSection>
        </Column>
      </WorkSection>
      <ContactSection>
        <Column alignItems="flex-start" gap={3}>
          <Text fontType="H1" color={theme.base.white}>
            CONTACT
          </Text>
          <Text fontType="H5" textAlign="start" color={theme.base.white}>
            프로젝트 및 기타 문의는 이메일로 연락주세요!
            <br />
            관련 정보를 상세히 남겨주시면 보다 정확한 답변을 드릴 수 있습니다.
          </Text>
        </Column>
        <ContactButton href={"어딘가로갑니다"}>ming9ris@naver.com</ContactButton>
      </ContactSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
`;

const LandingSection = styled.section`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 14rem 0 8rem 0;
  box-sizing: border-box;
`;

const LandingSectionImg = styled(Image)`
  filter: brightness(80%);
  z-index: -100;
`;

const Section = styled.section<{ pageName: string }>`
  width: 100vw;
  min-height: 100vh;

  position: relative;
  gap: 4rem;

  padding: 4rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "${({ pageName }) => pageName}";
    position: absolute;
    top: 8%;
    left: 6%;
    ${font.H1};
    color: ${theme.primary[500]};
  }
`;

const VisionSectionBackgroundImg = styled.div`
  width: "10rem";
  height: "10rem";

  position: absolute;
`;

const MainText = styled.span`
  width: fit-content;
  color: ${theme.base.white};
  ${font.Keyword};
`;

const DescText = styled.span`
  width: fit-content;
  color: ${theme.base.black};
  ${font.p0};
  text-align: center;
`;

const WorkSection = styled.section<{ pageName: string }>`
  width: 100vw;
  min-height: 100vh;

  position: relative;
  gap: 4rem;

  padding: 16rem 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "${({ pageName }) => pageName}";
    position: absolute;
    top: 8%;
    left: 6%;
    ${font.H1};
    color: ${theme.primary[500]};
  }
`;

const ContactSection = styled.section`
  width: 100vw;
  height: fit-content;

  position: relative;
  gap: 2rem;

  padding: 6rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.primary[400]};
  color: ${theme.base.white};
  ${font.H1};
`;

const HighlightBoxSection = styled.section`
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const DetailInfobutton = styled.button`
  width: fit-content;
  height: fit-content;

  white-space: nowrap;

  padding: 1rem 3rem;
  background-color: ${theme.primary[400]};
  border-radius: 999rem;

  color: ${theme.base.white};
  ${font.p1};
  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: ${theme.primary[300]};
    transform: scale(1.02) translateY(3%);
  }
`;

const WorkLinkButton = styled.div`
  width: 100%;

  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-end;

  ${font.H4};
  color: ${theme.gray[400]};
`;

const WorkBoxSection = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  gap: 0.75vw 0;
`;

const WorkBoxImage = styled(Image)`
  transition: ease-out 0.2s;
`;

const WorkBox = styled.div<{ width: CSSProperties["width"]; content: string }>`
  width: ${({ width }) => width};
  height: 20rem;

  position: relative;
  overflow: hidden;

  &::before {
    content: "${({ content }) => content}";
    position: absolute;
    left: 5%;
    bottom: 5%;
    ${font.H2};
    color: ${theme.base.white};
    z-index: 10;
  }

  &:hover {
    ${WorkBoxImage} {
      transform: scale(1.05);
    }
  }
`;

const ContactButton = styled(Link)`
  padding: 1.25rem 3rem;
  ${font.H4};
  color: ${theme.base.white};

  box-shadow: 0 0 0 2px ${theme.base.white};
  border-radius: 9999999999rem;

  transition: 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 0 4px ${theme.base.white};
  }
`;
