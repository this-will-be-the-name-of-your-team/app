"use client";

import Footer from "@/components/Footer";
import { font } from "@/styles/generator/font";
import { theme } from "@/styles/theme";
import Column from "@/styles/ui/column";
import Text from "@/styles/ui/text";
import Image from "next/image";
import Link from "next/link";
import { keyframes, styled } from "styled-components";

const Page = () => {
  return (
    <Container>
      <ImageWrap>
        <ContactIamge src="/landing/contact.png" alt="문의" fill objectFit="cover" />
      </ImageWrap>
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
        <ContactButton href={"/contact"}>ming9ris@naver.com</ContactButton>
      </ContactSection>
      <Footer />
    </Container>
  );
};

export default Page;

const scrollImage = keyframes`
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(35%);
  }
`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;

  animation: ${scrollImage} ease-out;
  animation-timeline: scroll(root block);
`;

const ContactIamge = styled(Image)`
  width: 100%;
  height: auto;
  position: absolute;
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
