import Link from "next/link";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title href="">MINGLE</Title>
      <Nav>
        <NavItem href="">갤러리</NavItem>
        <NavItem href="">소개</NavItem>
        <NavItem href="">로그인</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 54px;
  position: fixed;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  color: #666666;
  margin-right: 772px;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  color: #666666;
  text-decoration: none;
`;

export default Header;
