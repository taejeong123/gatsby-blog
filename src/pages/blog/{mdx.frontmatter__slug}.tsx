import { Flex, GlobalLayout, Seo, Tag } from "@/ui";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import React, { ReactNode } from "react";

type BlogPostProps = {
  data: GatsbyTypes.MdxQuery;
  children: ReactNode;
};
const BlogPost = ({ data, children }: BlogPostProps) => {
  return (
    <GlobalLayout>
      <StyledBlogContentHeader gap="10px" flexDirection="column">
        <Flex gap="10px">
          {data.mdx?.frontmatter?.tags?.map(
            (tag, i) =>
              tag && (
                <Tag key={`${tag}_${i}`} tag={tag}>
                  {tag}
                </Tag>
              )
          )}
        </Flex>

        <h1>{data.mdx?.frontmatter?.title}</h1>
        <span>{data.mdx?.frontmatter?.date}</span>
      </StyledBlogContentHeader>

      <StyledDivider />

      {children}
    </GlobalLayout>
  );
};

export const query = graphql`
  query Mdx($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
    }
  }
`;

export const Head = ({ data }: { data: GatsbyTypes.MdxQuery }) => (
  <Seo title={data.mdx?.frontmatter?.title || ""} />
);

export default BlogPost;

const StyledBlogContentHeader = styled(Flex)`
  & > h1 {
    margin: 0;
  }

  & > span {
    font-size: 14px;
  }
`;

const StyledDivider = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.mode.dividerColor};
`;
