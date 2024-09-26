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

      <GlobalHeader />

      <StyledContainer>
        <main>{children}</main>
      </StyledContainer>

      <ThemeToggleButton onClick={themeToggler}>
        {theme === "light" ? "dark" : "light"}
      </ThemeToggleButton>
    </ThemeProvider>
  );
};

const StyledContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  padding: 30px 0;
  max-width: 700px;
`;

const ThemeToggleButton = styled.button`
  width: 100px;
  height: 50px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  transform: transition(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.mode.text};
  border-radius: 50px;
  color: ${({ theme }) => theme.mode.text};
  background-color: ${({ theme }) => theme.mode.backgroundColor};
  cursor: pointer;
`;
