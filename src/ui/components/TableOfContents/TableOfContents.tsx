import { ContentsItemType } from "@/types";
import { ContentItem, Flex } from "@/ui";
import styled from "@emotion/styled";
import React from "react";

type TableOfContentsProps = {
  items: ContentsItemType[];
  slug: string;
};
export const TableOfContents = ({ items, slug }: TableOfContentsProps) => {
  return (
    <StyledStickyTableOfContents>
      <ul>
        <ContentItem items={items} slug={slug} depth={0} />
      </ul>
    </StyledStickyTableOfContents>
  );
};

const StyledStickyTableOfContents = styled(Flex)`
  width: 300px;
  height: 100%;
  position: absolute;
  left: calc(100% + 50px);

  & > ul {
    margin: 0;
    padding-left: 10px;
    height: fit-content;
    position: sticky;
    top: 100px;
    border-left: 1px solid ${({ theme }) => theme.mode.tableBorderColor};
  }
`;
