import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Title>MINGLE</Title>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #333333;
  bottom: 0px;
  position: fixed;
  display: flex;
`;

const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-left: 180px;
  margin-top: 20px;
`;

export default Footer;
