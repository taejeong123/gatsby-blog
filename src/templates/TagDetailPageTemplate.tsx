import { GlobalLayout } from "@/ui";
import { graphql, Link, PageProps } from "gatsby";
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
  const { tag } = pageContext;
  const { totalCount, edges } = data.allMdx;

  return (
    <GlobalLayout>
      <h1>{`태그 "${tag}"`}</h1>
      <p>{`글 ${totalCount}개`}</p>

      <ul>
        {edges.map(
          ({ node: { frontmatter } }) =>
            frontmatter && (
              <li key={frontmatter.slug}>
                <Link to={`/blog/${frontmatter.slug}`}>
                  {frontmatter.title}
                </Link>
              </li>
            )
        )}
      </ul>
    </GlobalLayout>
  );
};

export const pageQuery = graphql`
  query AllMdxTagPageDetail($tag: String) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
