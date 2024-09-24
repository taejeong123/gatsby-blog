import { Layout, Seo } from "@/components";
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
    <>
      <Layout>
        <h1>{data.mdx?.frontmatter?.title}</h1>
        <p>{data.mdx?.frontmatter?.date}</p>

        <hr />

        {image && (
          <GatsbyImage
            image={image}
            alt={data.mdx?.frontmatter?.hero_image_alt || ""}
          />
        )}

        {children}
      </Layout>
    </>
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
