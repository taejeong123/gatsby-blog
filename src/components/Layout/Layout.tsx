import GlobalStyle from "@/styles/globalStyle";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
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

      <GlobalStyle />
      <main>{children}</main>
    </StyledContainer>
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
  color: black;
  text-decoration: none;
`;
