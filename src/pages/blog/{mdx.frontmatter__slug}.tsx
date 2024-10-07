import { StyledDivider } from "@/styles";
import { BlogDetailType } from "@/types";
import { Flex, GlobalLayout, Seo, TableOfContents, Tag } from "@/ui";
import styled from "@emotion/styled";
import { PageProps, graphql } from "gatsby";
import React from "react";

const BlogPost = ({ data, children }: PageProps<BlogDetailType>) => {
  const {
    mdx: { frontmatter },
  } = data;

  return (
    <GlobalLayout>
      <StyledBlogContentHeader gap="10px" flexDirection="column">
        <Flex gap="10px">
          {frontmatter.tags.map(
            (tag, i) =>
              tag && (
                <Tag key={`${tag}_${i}`} tag={tag}>
                  {tag}
                </Tag>
              )
          )}
        </Flex>

        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
      </StyledBlogContentHeader>

      <TableOfContents items={data.mdx.tableOfContents.items} />

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
      excerpt
      tableOfContents
    }
  }
`;

export const Head = ({ data }: { data: BlogDetailType }) => {
  const {
    mdx: { frontmatter, excerpt },
  } = data;
  const title = frontmatter.title;
  return title && excerpt && <Seo title={title} description={excerpt} />;
};

export default BlogPost;

const StyledBlogContentHeader = styled(Flex)`
  & > h1 {
    margin: 0;
  }

  & > span {
    font-size: 14px;
  }
`;
