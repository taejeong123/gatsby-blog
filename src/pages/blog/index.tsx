import { Layout, Seo } from "@/components";
import { Link, graphql } from "gatsby";
import React from "react";

type BlogPageProps = {
  data: GatsbyTypes.AllMdxQuery;
};
const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout>
      <h1>Blogs</h1>

      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3>
            <Link to={`/blog/${node.frontmatter?.slug}`}>
              {node.frontmatter?.title}
            </Link>
          </h3>
          <p>{node.frontmatter?.date}</p>
          {node.frontmatter?.tags?.map((tag, i) => (
            <span key={`${tag}_${i}`}>#{tag}&nbsp;</span>
          ))}
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
          slug
          tags
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
