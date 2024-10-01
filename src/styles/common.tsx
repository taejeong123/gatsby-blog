import { Flex } from "@/ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.mode.primaryText};
  text-decoration: none;
`;

export const StyledDivider = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.mode.dividerColor};
`;

export const StyledBlogContainer = styled(Flex)`
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;

  & > article {
    width: calc(100% / 3 - 13.4px);
  }

  @media (max-width: 750px) {
    & > article {
      width: calc(100% / 2 - 13.4px);
    }
  }

  @media (max-width: 500px) {
    & > article {
      width: 100%;
    }
  }
`;
