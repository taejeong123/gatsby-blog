import { Flex, Layout, Seo, Tag } from "@/ui";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";

type BlogPostProps = {
  data: GatsbyTypes.MdxQuery;
  children: ReactNode;
};
const BlogPost = ({ data, children }: BlogPostProps) => {
  const heroImage = data.mdx?.frontmatter?.hero_image;
  const image = heroImage && getImage(heroImage?.childImageSharp);

  return (
    <Layout>
      <StyledBlogContentHeader gap="10px" flexDirection="column">
        <Flex gap="10px">
          {data.mdx?.frontmatter?.tags?.map((tag, i) => (
            <Tag key={`${tag}_${i}`}>{tag}</Tag>
          ))}
        </Flex>

        <h1>{data.mdx?.frontmatter?.title}</h1>
        <span>{data.mdx?.frontmatter?.date}</span>
      </StyledBlogContentHeader>

      <StyledDivider />

      {image && (
        <GatsbyImage
          image={image}
          alt={data.mdx?.frontmatter?.hero_image_alt || ""}
        />
      )}

      {children}
    </Layout>
  );
};

export const query = graphql`
  query Mdx($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: { data: GatsbyTypes.MdxQuery }) => (
  <Seo title={data.mdx?.frontmatter?.title || ""} />
);

export default BlogPost;

const StyledBlogContentHeader = styled(Flex)`
  margin-top: 30px;

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
