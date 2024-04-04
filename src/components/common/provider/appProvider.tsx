import { ReactNode } from "react";
import { GlobalStyle } from "@/styles/global";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default AppProvider;
