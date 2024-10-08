import { StyledLink } from "@/common";
import { ThemeType } from "@/types/declare";
import { Flex, Icon } from "@/ui";
import styled from "@emotion/styled";
import React from "react";

type GlobalHeaderType = {
  theme: ThemeType;
  onThemeToggle: () => void;
};
export const GlobalHeader = ({ theme, onThemeToggle }: GlobalHeaderType) => {
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
              <ThemeToggleButton onClick={onThemeToggle}>
                <Icon
                  variant={theme === "light" ? "Moon" : "Sun"}
                  size="18px"
                />
              </ThemeToggleButton>
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
  width: 1000px;
  height: 100%;

  & > nav {
    & > ul {
      display: flex;
      align-items: center;
      gap: 20px;
      list-style: none;
    }
  }

  @media (max-width: 1050px) {
    max-width: 700px;
  }

  @media (max-width: 750px) {
    max-width: 480px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }
`;

const ThemeToggleButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${({ theme }) => theme.mode.primaryText};
  background-color: ${({ theme }) => theme.mode.backgroundColor};
  cursor: pointer;
`;
