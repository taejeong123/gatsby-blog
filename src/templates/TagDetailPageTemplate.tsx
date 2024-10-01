import { StyledBlogContainer, StyledDivider } from "@/styles";
import { TagDetailType } from "@/types";
import { BlogCard, Flex, GlobalLayout, Seo, Tag } from "@/ui";
import styled from "@emotion/styled";
import { PageProps, graphql } from "gatsby";
import * as React from "react";

type TagDetailPageTemplateContext = {
  tag: string;
};
const TagDetailPageTemplate = ({
  pageContext,
  data,
}: PageProps<TagDetailType, TagDetailPageTemplateContext>) => {
  const { tag: currentTag } = pageContext;
  const { group } = data.allTags;
  const { totalCount, nodes } = data.tagDetail;

  return (
    <GlobalLayout>
      <h3>{currentTag} 🏷️</h3>

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

      <StyledBlogWrapper flexDirection="column">
        <p>{totalCount}개의 글</p>

        <StyledBlogContainer>
          {nodes.map(({ id, frontmatter }) => (
            <BlogCard key={id} frontmatter={frontmatter} />
          ))}
        </StyledBlogContainer>
      </StyledBlogWrapper>
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
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          tags
          thumbnail_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          thumbnail_image_alt
        }
      }
    }
  }
`;

export const Head = ({
  pageContext,
}: PageProps<object, TagDetailPageTemplateContext>) => {
  const { tag } = pageContext;
  return <Seo title={`Tags | ${tag}`} />;
};

export default TagDetailPageTemplate;

const StyledBlogWrapper = styled(Flex)`
  & > p {
    font-size: 14px;
    color: ${({ theme }) => theme.mode.secondaryText};
  }
`;
