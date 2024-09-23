import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { ReactNode } from "react";

type LayoutProps = {
  pageTitle: string;
  children: ReactNode;
};
const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <StyledContainer>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </StyledContainer>
  );
};

export default Layout;

const StyledContainer = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;

  & > nav {
    & > ul {
      display: flex;
      list-style: none;
      padding-left: 0;

      & > li {
        padding-right: 2rem;
      }
    }
  }

  & > main > h1 {
    color: rebeccapurple;
  }
`;

const StyledLink = styled(Link)`
  color: black;
`;
