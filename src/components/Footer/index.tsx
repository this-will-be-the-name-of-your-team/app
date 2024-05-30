import { styled } from "styled-components";
import FooterLogo from "@/styles/svg/FooterLogo";
import Chtalk from "@/styles/svg/Chtalk";
import FacebookLogo from "@/styles/svg/FacebookLogo";
import InstaLogo from "@/styles/svg/InstaLogo";

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <FooterLogo />
        <Text>
          상호명 : 밍글 | 대표 : 황다교
          <br />
          ADD. 부산광역시 어쩌고 저쩌고 123-456번지 주소
          <br />
          T. 010-1234-5678 | F.010-1234-5678 | E. ming9ris@naver.com
        </Text>
      </TextContainer>
      <IconContainer>
        <Icons>
          <a href="https://pf.kakao.com/_xcWlWG">
            <Chtalk />
          </a>
          <a href="">
            <FacebookLogo />
          </a>
          <a href="">
            <InstaLogo />
          </a>
        </Icons>
        <Copyright>COPYRIGHT © 2024 MINGLE MOOD Co., Ltd. ALL RIGHTS RESERVED.</Copyright>
      </IconContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 18.75rem;
  bottom: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
`;

const Text = styled.div`
  color: #999999;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: right;
  gap: 1.25rem;
`;

const Copyright = styled.div`
  color: #999999;
`;

export default Footer;
