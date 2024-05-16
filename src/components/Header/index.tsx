import Link from "next/link";
import { styled } from "styled-components";
import { flex } from "@/styles/generator/flex";
import { font } from "@/styles/generator/font";

const Header = () => {
  return (
    <HeaderContainer>
      <Title href="">MINGLE</Title>
      <Nav>
        <NavItem href="">about</NavItem>
        <NavItem href="">work</NavItem>
        <NavItem href="">contact</NavItem>
        <NavItem href="">login</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${flex.CENTER}
  width: 100%;
  height: 54px;
  display: flex;
  position: fixed;
  color: #666666;
`;

const Title = styled(Link)`
  ${font.H3}
  color: #666666;
  margin-right: 772px;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 35px;
`;

const NavItem = styled(Link)`
  ${font.H3}
  color: #666666;
  text-decoration: none;
`;

export default Header;
