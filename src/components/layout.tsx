import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { ReactNode } from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

type LayoutProps = {
  pageTitle: string;
  children: ReactNode;
};
const Layout = ({ pageTitle, children }: LayoutProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <StyledContainer>
      <header>{siteMetadata?.title}</header>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">Blog</StyledLink>
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

  & > header {
    font-size: 3rem;
    color: gray;
    font-weight: 700;
    margin: 3rem 0;
  }

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
