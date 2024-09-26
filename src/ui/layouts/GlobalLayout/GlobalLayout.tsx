import { useTheme } from "@/hooks/useTheme";
import { GlobalStyle, darkTheme, lightTheme } from "@/styles";
import { GlobalHeader } from "@/ui";
import { Theme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type GlobalLayoutProps = {
  children: ReactNode;
};
export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const [theme, themeToggler] = useTheme();
  const themeMode: Theme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <GlobalHeader theme={theme} onThemeToggle={themeToggler} />

      <StyledContainer>
        <main>{children}</main>
      </StyledContainer>
    </ThemeProvider>
  );
};

const StyledContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  padding: 30px 0;
  max-width: 700px;
`;
