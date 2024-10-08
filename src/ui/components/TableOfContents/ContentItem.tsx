import { ContentsItemType } from "@/types";
import { Flex } from "@/ui/base";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import React from "react";

type ContentItemProps = {
  items: ContentsItemType[];
  slug: string;
  depth: number;
};
export const ContentItem = ({ items, slug, depth }: ContentItemProps) => {
  return (
    <StyledContent flexDirection="column" depth={depth}>
      {items.map((item, i) => (
        <Flex key={i} flexDirection="column">
          <StyledItemLink to={`/blog/${slug}/${item.url}`}>
            {item.title}
          </StyledItemLink>
          {item.items && (
            <ContentItem items={item.items} slug={slug} depth={depth + 1} />
          )}
        </Flex>
      ))}
    </StyledContent>
  );
};

const StyledContent = styled(Flex)<{ depth: number }>`
  margin-left: ${({ depth }) => `${depth * 14}px`};
`;

const StyledItemLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.mode.tocText};

  &:hover {
    color: ${({ theme }) => theme.mode.secondaryText};
  }
`;
