"use client";

import { ReactNode } from "react";
import { GlobalStyle } from "@/styles/global";
import StyledComponentsRegistry from "@/app/lib/regisrty";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <Header />
        {children}
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

export default AppProvider;
