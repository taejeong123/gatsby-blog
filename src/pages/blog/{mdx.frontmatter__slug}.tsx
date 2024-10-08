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

      <div style={{ marginTop: "50px" }}>
        <TableOfContents
          items={data.mdx.tableOfContents.items}
          slug={frontmatter.slug}
        />

        {children}
      </div>

      {/* TODO: 프로필 or 댓글 or 이전글,다음글 or 추천글 컨텐츠 추가 */}
      <StyledBlogFooter justifyContent="center" alignItems="center">
        something contents here (profile, comments, etc..)
      </StyledBlogFooter>
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
        slug
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

const StyledBlogFooter = styled(Flex)`
  margin-top: 50px;
  height: 800px;
  border-top: 1px solid ${({ theme }) => theme.mode.dividerColor};

  color: ${({ theme }) => theme.mode.tocText};
`;
