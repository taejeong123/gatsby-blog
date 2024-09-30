import styled from "@emotion/styled";
import { navigate } from "gatsby";
import React, { ReactNode } from "react";

type TagProps = {
  tag: string;
  children: ReactNode;
};
export const Tag = ({ tag, children }: TagProps) => {
  return (
    <StyledTag onClick={() => navigate(`/tag/${tag}`)}>{children}</StyledTag>
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
`;
