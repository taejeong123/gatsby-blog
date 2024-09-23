import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type BlogPostProps = {
  data: GatsbyTypes.MdxQuery;
  children: ReactNode;
};
const BlogPost = ({ data, children }: BlogPostProps) => {
  const heroImage = data.mdx?.frontmatter?.hero_image;
  const image = heroImage && getImage(heroImage?.childImageSharp);

  return (
    <>
      <Layout pageTitle={data.mdx?.frontmatter?.title || ""}>
        <p>Posted: {data.mdx?.frontmatter?.date}</p>

        {image && (
          <GatsbyImage
            image={image}
            alt={data.mdx?.frontmatter?.hero_image_alt || ""}
          />
        )}

        <p>
          Photo Credit:{" "}
          <a href={data.mdx?.frontmatter?.hero_image_credit_link || ""}>
            {data.mdx?.frontmatter?.hero_image_credit_text}
          </a>
        </p>

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
