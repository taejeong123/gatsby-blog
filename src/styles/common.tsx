import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.mode.text};
  text-decoration: none;
`;
