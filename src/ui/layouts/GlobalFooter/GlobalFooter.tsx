import styled from "@emotion/styled";
import React from "react";

export const GlobalFooter = () => {
  return <StyledFooter>© 2024. Built with Gatsby</StyledFooter>;
};

const StyledFooter = styled.footer`
  padding-top: 50px;
  padding-bottom: 80px;
  width: 100%;
  font-size: 12px;
  text-align: center;
`;
