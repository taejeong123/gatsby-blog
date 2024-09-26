import { Flex } from "@/ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";

export const GlobalHeader = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer alignItems="center" justifyContent="space-between">
        <StyledLink to="/">🥕</StyledLink>

        <nav>
          <ul>
            <li>
              <StyledLink to="/">Blogs</StyledLink>
            </li>
            <li>
              <StyledLink to="/tags">Tags</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
          </ul>
        </nav>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mode.headerDimmedBackgroundColor};
  backdrop-filter: blur(4px);
  z-index: 999;
`;

const StyledHeaderContainer = styled(Flex)`
  width: 1100px;

  & > nav {
    & > ul {
      display: flex;
      gap: 20px;
      list-style: none;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.mode.text};
  text-decoration: none;
`;
