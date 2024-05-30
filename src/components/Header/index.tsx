import Link from "next/link";
import { styled } from "styled-components";
import { flex } from "@/styles/generator/flex";
import { font } from "@/styles/generator/font";
import { theme } from "@/styles/theme";
import HeaderLogo from "@/styles/svg/headerLogo";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <Nav>
        <NavItem href="/about">ABOUT</NavItem>
        <NavItem href="/work">WORK</NavItem>
        <NavItem href="/contact">CONTACT</NavItem>
        <NavItem href="/login">LOGIN</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${flex.CENTER}
  width: 100%;
  height: 5rem;
  display: flex;
  position: absolute;
  color: #666666;
  gap: 50rem;
  background-color: ${theme.base.white};
  box-shadow: 0 0 8px ${theme.gray[200]};

  z-index: 999999;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled(Link)`
  ${font.H5}
  color: #666666;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-out;

  &:hover {
    background-color: ${theme.gray[50]};
  }
`;

export default Header;
