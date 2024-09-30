import { useTheme } from "@/hooks";
import { Color } from "@/ui/base";
import styled from "@emotion/styled";
import { navigate } from "gatsby";
import React, { ReactNode } from "react";

type TagProps = {
  tag: string;
  isActive?: boolean;
  children: ReactNode;
};
export const Tag = ({ tag, isActive = false, children }: TagProps) => {
  const [theme] = useTheme();

  return (
    <StyledTag
      className={
        isActive ? (theme === "dark" ? "active dark" : "active light") : ""
      }
      onClick={() => navigate(`/tags/${tag}`)}
    >
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  padding: 2px 8px;
  border-radius: 50px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.mode.tagBackgroundColor};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.mode.tagHoverBackgroundColor};
  }

  &.active {
    background-color: ${({ theme }) =>
      theme.mode.modeName === "dark" ? Color.MonoGray02 : Color.MonoGray00};
    color: ${({ theme }) =>
      theme.mode.modeName === "dark"
        ? Color.DarkMossGray
        : Color.MonoWhiteText};
  }
`;
