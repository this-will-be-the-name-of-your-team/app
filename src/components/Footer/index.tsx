import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <Title>MINGLE MOOD</Title>
        <Text>
          상호명 : 밍글 | 대표 : 황다교
          <br />
          ADD. 부산광역시 어쩌고 저쩌고 123-456번지 주소
          <br />
          T. 010-1234-5678 | F.010-1234-5678 | E. ming9ris@naver.com
        </Text>
      </TextContainer>
      <IconContainer>
        <Copyright>COPYRIGHT © 2024 MINGLE MOOD Co., Ltd. ALL RIGHTS RESERVED.</Copyright>
      </IconContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 18.75rem;
  background-color: #333333;
  bottom: 0rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Title = styled.div`
  color: #ff5816;
  font-size: 40px;
  font-weight: bold;
`;

const Text = styled.div`
  color: #999999;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction; column;
`;

const Copyright = styled.div`
  color: #999999;
`;

export default Footer;
