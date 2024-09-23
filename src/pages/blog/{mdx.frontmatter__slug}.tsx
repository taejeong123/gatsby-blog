import { graphql } from "gatsby";
import React, { ReactNode } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type BlogPostProps = {
  data: GatsbyTypes.MdxQuery;
  children: ReactNode;
};
const BlogPost = ({ data, children }: BlogPostProps) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title || ""}>
      <p>{data.mdx?.frontmatter?.date}</p>
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
      }
    }
  }
`;

export const Head = ({ data }: { data: GatsbyTypes.MdxQuery }) => (
  <Seo title={data.mdx?.frontmatter?.title || ""} />
);

export default BlogPost;
