import { StyledBlogContainer } from "@/common";
import { AllBlogType } from "@/types";
import { BlogCard, GlobalLayout, Seo } from "@/ui";
import { PageProps, graphql } from "gatsby";
import React from "react";

const IndexPage = ({ data }: PageProps<AllBlogType>) => {
  const { nodes } = data.allMdx;

  return (
    <GlobalLayout>
      <h3>Welcome to my Blog 🔥</h3>

      <StyledBlogContainer>
        {nodes.map(({ id, frontmatter }) => (
          <BlogCard key={id} frontmatter={frontmatter} />
        ))}
      </StyledBlogContainer>
    </GlobalLayout>
  );
};

export const query = graphql`
  query AllMdx {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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

export const Head = () => <Seo title="Blogs" />;

export default IndexPage;
