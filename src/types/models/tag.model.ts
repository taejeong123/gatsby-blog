import { BlogFrontmatterType } from "@/types";

export type TagDetailType = {
  allTags: {
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
  tagDetail: {
    totalCount: number;
    nodes: {
      id: string;
      frontmatter: BlogFrontmatterType;
    }[];
  };
};
