import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

type BlogPageProps = {
  data: GatsbyTypes.AllMdxQuery;
};
const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter?.title}</h2>
          <p>Posted: {node.frontmatter?.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query AllMdx {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
