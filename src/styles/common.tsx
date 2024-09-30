import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.mode.text};
  text-decoration: none;
`;

export const StyledDivider = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.mode.dividerColor};
`;
