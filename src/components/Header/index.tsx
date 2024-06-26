"use client";

import { useHide } from "@/hooks/useHide";
import { flex } from "@/styles/generator/flex";
import { font } from "@/styles/generator/font";
import HeaderLogo from "@/styles/svg/headerLogo";
import { theme } from "@/styles/theme";
import Link from "next/link";
import { styled } from "styled-components";
import { Storage } from "@/storage";
import { useRouter } from "next/navigation";

const navigateList = [
  { href: "/", name: "ABOUT" },
  { href: "/work", name: "WORK" },
  { href: "/contact", name: "CONTACT" },
];

const Header = () => {
  const isAdmin = Storage.getItem("access_token");
  const targetRef = useHide();
  const router = useRouter();

  const accessToken = process.env.NEXT_PUBLIC_AUTHENTICATED_ACCESS_TOKEN;
  const handleClickLogin = () => {
    const authorization = prompt("관리자 비밀번호를 입력해주세요.");
    console.log(authorization);
    if (authorization === accessToken) {
      localStorage.setItem("access_token", authorization);
      alert("로그인 정보가 저장되었습니다.");
      router.refresh();
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <HeaderContainer ref={targetRef}>
      <Link href="/">
        <HeaderLogo />
      </Link>
      <Nav>
        {navigateList.map((navigate) => (
          <NavItem href={navigate.href}>{navigate.name}</NavItem>
        ))}
        <Login
          onClick={() => {
            if (!isAdmin) handleClickLogin();
            else {
              Storage.clear();
              router.refresh();
            }
          }}
        >
          {isAdmin ? "LOGOUT" : "LOGIN"}
        </Login>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${flex.CENTER}
  width: 100%;
  height: 8%;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  color: #666666;
  gap: 50rem;
  background-color: ${theme.base.white};
  box-shadow: 0 0 8px ${theme.gray[200]};

  z-index: 100;
  transition: 0.1s ease-out;
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
    background-color: ${theme.gray[100]};
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
    background-color: ${theme.gray[100]};
  }
`;

export default Header;
