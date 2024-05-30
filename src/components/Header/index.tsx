import Link from "next/link";
import { styled } from "styled-components";
import { flex } from "@/styles/generator/flex";
import { font } from "@/styles/generator/font";

const Header = () => {
  return (
    <HeaderContainer>
      <Title href="">MINGLE</Title>
      <Nav>
        <NavItem href="">ABOUT</NavItem>
        <NavItem href="">WORK</NavItem>
        <NavItem href="">CONTACK</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${flex.CENTER}
  width: 100%;
  height: 5rem;
  display: flex;
  position: fixed;
  color: #666666;
  gap: 50rem;
`;

const Title = styled(Link)`
  ${font.H3}
  color: #666666;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  ${font.H3}
  color: #666666;
  text-decoration: none;
`;

export default Header;
