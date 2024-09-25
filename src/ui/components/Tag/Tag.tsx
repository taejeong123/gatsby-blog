import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};
export const Tag = ({ children }: TagProps) => {
  return <StyledTag>{children}</StyledTag>;
};

const StyledTag = styled.div`
  border: 1px solid gray;
  border-radius: 50px;
  padding: 2px 8px;
  font-size: 12px;
  cursor: pointer;
`;
