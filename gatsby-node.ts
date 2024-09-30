import { GatsbyNode } from "gatsby";
import path from "path";

type TagGroupsQueryData = {
  tagsGroup: {
    group: {
      fieldValue: string;
    }[];
  };
};
export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const result = await graphql<TagGroupsQueryData>(`
    query TagsGroup {
      tagsGroup: allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const tagsTemplatePath = path.resolve(
    "./src/ui/templates/TagDetailPageTemplate.tsx"
  );

  result.data.tagsGroup.group.forEach((tag) => {
    actions.createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagsTemplatePath,
      context: { tag: tag.fieldValue },
    });
  });
};
