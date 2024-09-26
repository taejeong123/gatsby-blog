import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};
export const Tag = ({ children }: TagProps) => {
  return <StyledTag>{children}</StyledTag>;
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
