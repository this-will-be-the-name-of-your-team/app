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
  height: 18.75rem;
  background-color: #333333;
  bottom: 0rem;
  position: fixed;
  display: flex;
`;

const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-left: 11.25rem;
  margin-top: 1.25rem;
`;

export default Footer;
