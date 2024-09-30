import { StyledDivider, StyledLink } from "@/styles";
import { Flex, GlobalLayout, Tag } from "@/ui";
import { PageProps, graphql } from "gatsby";
import * as React from "react";

type TagDetailPageTemplateContext = {
  tag: string;
};
const TagDetailPageTemplate = ({
  pageContext,
  data,
}: PageProps<
  Queries.AllMdxTagPageDetailQuery,
  TagDetailPageTemplateContext
>) => {
  const { tag: currentTag } = pageContext;
  const { group } = data.allTags;
  const { totalCount, edges } = data.tagDetail;

  return (
    <GlobalLayout>
      <h3>{currentTag}</h3>

      <Flex gap="10px" style={{ marginTop: "30px" }}>
        {group.map(
          (tag, i) =>
            tag.fieldValue && (
              <Tag
                key={i}
                tag={tag.fieldValue}
                isActive={tag.fieldValue === currentTag}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Tag>
            )
        )}
      </Flex>

      <StyledDivider />

      <p>{totalCount}개의 글</p>
      <ul>
        {edges.map(
          ({ node: { id, frontmatter } }) =>
            frontmatter && (
              <li key={id}>
                <StyledLink to={`/blog/${frontmatter.slug}`}>
                  {frontmatter.title}
                </StyledLink>
              </li>
            )
        )}
      </ul>
    </GlobalLayout>
  );
};

export const pageQuery = graphql`
  query AllMdxTagPageDetail($tag: String) {
    allTags: allMdx {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
    tagDetail: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;

export default TagDetailPageTemplate;
