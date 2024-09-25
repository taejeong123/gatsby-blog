import { useTheme } from "@/hooks/useTheme";
import { GlobalStyle, darkTheme, lightTheme } from "@/styles";
import { Theme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  const [theme, themeToggler] = useTheme();
  const themeMode: Theme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <StyledContainer>
        <header>
          <StyledLink to="/">🥕</StyledLink>

          <nav>
            <ul>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/blog">Blog</StyledLink>
              </li>
              <li>
                <StyledLink to="/about">About</StyledLink>
              </li>
            </ul>
          </nav>
        </header>

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
  max-width: 800px;

  & > header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > nav {
      & > ul {
        display: flex;
        gap: 20px;
        list-style: none;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.mode.text};
  text-decoration: none;
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
