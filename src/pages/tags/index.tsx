import { GlobalLayout, Seo } from "@/ui";
import { Link, PageProps, graphql } from "gatsby";
import * as React from "react";

const TagsPage = ({ data }: PageProps<Queries.AllMdxTagsGroupQuery>) => {
  const { group } = data.allMdx;
  const tags = [...group].sort((a, b) => b.totalCount - a.totalCount);

  return (
    <GlobalLayout>
      <h1>tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>{`${tag.fieldValue}`}</Link>{" "}
            <small>{`${tag.totalCount}`}</small>
          </li>
        ))}
      </ul>
    </GlobalLayout>
  );
};

export const query = graphql`
  query AllMdxTagsGroup {
    allMdx {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => <Seo title="Tags" />;

export default TagsPage;
