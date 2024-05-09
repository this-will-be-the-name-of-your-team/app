"use client";

import { ReactNode } from "react";
import { GlobalStyle } from "@/styles/global";
import StyledComponentsRegistry from "@/app/lib/regisrty";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
};

export default AppProvider;
