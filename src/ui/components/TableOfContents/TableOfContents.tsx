import { StyledLink } from "@/styles";
import { ContentsItemType } from "@/types";
import { Flex } from "@/ui";
import React from "react";

type TableOfContentsProps = {
  items: ContentsItemType[];
};
export const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <Flex flexDirection="column">
      {items.map((item, i) => (
        <Flex key={i} flexDirection="column">
          <StyledLink to={`${item.url}`}>{item.title}</StyledLink>
          {item.items && <TableOfContents items={item.items} />}
        </Flex>
      ))}
    </Flex>
  );
};
