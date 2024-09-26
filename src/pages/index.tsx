import { StyledLink } from "@/styles";
import { Flex, GlobalLayout, Icon, Seo, Tag } from "@/ui";
import styled from "@emotion/styled";
import { graphql, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type IndexPageProps = {
  data: GatsbyTypes.AllMdxQuery;
};
const IndexPage = ({ data }: IndexPageProps) => {
  const handleOnClickArticle = (slug: string) => {
    if (slug) navigate(`/blog/${slug}`);
  };

  return (
    <GlobalLayout>
      <p>Welcome to my Blog 🔥</p>

      <StyledContainer>
        {data.allMdx.nodes.map((node) => (
          <StyledCardContent key={node.id}>
            <StyledImageBox
              justifyContent="center"
              alignItems="center"
              onClick={() => handleOnClickArticle(node.frontmatter?.slug || "")}
            >
              {node.frontmatter?.thumbnail_image?.childImageSharp
                ?.gatsbyImageData ? (
                <StyledThumbnailImage
                  image={
                    node.frontmatter?.thumbnail_image?.childImageSharp
                      ?.gatsbyImageData
                  }
                  alt={node.frontmatter?.thumbnail_image_alt || "image alt"}
                />
              ) : (
                <StyledThumbnailIcon variant="Image" size="20px" />
              )}
            </StyledImageBox>

            <Flex gap="5px" flexDirection="column">
              <h3>
                <StyledLink to={`/blog/${node.frontmatter?.slug}`}>
                  {node.frontmatter?.title}
                </StyledLink>
              </h3>
              <span>{node.frontmatter?.date}</span>
              <Flex gap="10px">
                {node.frontmatter?.tags?.map((tag, i) => (
                  <Tag key={`${tag}_${i}`}>{tag}</Tag>
                ))}
              </Flex>
            </Flex>
          </StyledCardContent>
        ))}
      </StyledContainer>
    </GlobalLayout>
  );
};

export const query = graphql`
  query AllMdx {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
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
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My blog posts" />;

export default IndexPage;

const StyledContainer = styled(Flex)`
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;

  & > article {
    width: calc(100% / 3 - 13.4px);
  }
`;

const StyledImageBox = styled(Flex)`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.mode.blogThumbnailBackgroundColor};
  border-radius: 8px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

const StyledThumbnailIcon = styled(Icon)`
  color: ${({ theme }) => theme.mode.blogThumbnailIconColor};
  opacity: 0.5;
`;

const StyledCardContent = styled.article`
  & h3 {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & span {
    font-size: 12px;
  }
`;
