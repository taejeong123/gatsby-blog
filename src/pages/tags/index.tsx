import { Flex, GlobalLayout, Seo, Tag } from "@/ui";
import { PageProps, graphql } from "gatsby";
import * as React from "react";

const TagsPage = ({ data }: PageProps<Queries.AllMdxTagsGroupQuery>) => {
  const { group } = data.allMdx;

  return (
    <GlobalLayout>
      <h3>tags</h3>

      <Flex gap="10px" style={{ marginTop: "30px" }}>
        {group.map(
          (tag, i) =>
            tag.fieldValue && (
              <Tag key={i} tag={tag.fieldValue}>
                {tag.fieldValue} ({tag.totalCount})
              </Tag>
            )
        )}
      </Flex>
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
