import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>MINGLE</Title>
      <Nav>
        <NavItem>갤러리</NavItem>
        <NavItem>소개</NavItem>
        <NavItem>로그인</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 54px;
  top: 0px;
  position: fixed;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #666666;
  margin-right: 772px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  color: #666666;
`;

export default Header;
