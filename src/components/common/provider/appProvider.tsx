"use client";

import { ReactNode } from "react";
import { GlobalStyle } from "@/styles/global";
import StyledComponentsRegistry from "@/app/lib/regisrty";
import Header from "@/components/Header";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <Header />
      {children}
    </StyledComponentsRegistry>
  );
};

export default AppProvider;
