import { tableOfContentsScrollHandler } from "@/common";
import { ContentsItemType } from "@/types";
import { ContentItem } from "@/ui";
import styled from "@emotion/styled";
import React from "react";

type TableOfContentsProps = {
  items: ContentsItemType[];
  slug: string;
};
export const TableOfContents = ({ items, slug }: TableOfContentsProps) => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => tableOfContentsScrollHandler(slug));
  }

  return (
    <StyledStickyTableOfContents>
      <ul>
        <ContentItem items={items} slug={slug} depth={0} />
      </ul>
    </StyledStickyTableOfContents>
  );
};

const StyledStickyTableOfContents = styled.aside`
  width: 300px;
  height: 100%;
  position: absolute;
  left: calc(100% + 100px);

  & > ul {
    margin: 0;
    padding-left: 14px;
    height: fit-content;
    position: sticky;
    top: 100px;
    border-left: 1px solid ${({ theme }) => theme.mode.dividerColor};
  }
`;
