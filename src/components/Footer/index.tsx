import styled from "styled-components";

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
`;

const Title = styled.div`
  color: white;
`;

export default Footer;
