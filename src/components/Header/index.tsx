"use client";

import { flex } from "@/styles/generator/flex";
import { font } from "@/styles/generator/font";
import HeaderLogo from "@/styles/svg/headerLogo";
import { theme } from "@/styles/theme";
import Link from "next/link";
import { styled } from "styled-components";

const navigateList = [
  { href: "/", name: "ABOUT" },
  { href: "/work", name: "WORK" },
  { href: "/contact", name: "CONTACT" },
];

const Header = () => {
  const accessToken = process.env.NEXT_PUBLIC_AUTHENTICATED_ACCESS_TOKEN;
  const handleClickLogin = () => {
    const authorization = prompt("관리자 비밀번호를 입력해주세요.");
    console.log(authorization);
    if (authorization === accessToken) {
      localStorage.setItem("access_token", authorization);
      alert("로그인 정보가 저장되었습니다.");
      window.location.reload();
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <HeaderContainer>
      <HeaderLogo />
      <Nav>
        {navigateList.map((navigate) => (
          <NavItem href={navigate.href}>{navigate.name}</NavItem>
        ))}
        <Login onClick={handleClickLogin}>LOGIN</Login>
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

const Login = styled.button`
  ${font.H5}
  color: #666666;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-out;

  &:hover {
    background-color: ${theme.gray[50]};
  }
`;

export default Header;
