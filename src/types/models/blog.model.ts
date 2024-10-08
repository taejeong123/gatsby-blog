import { IGatsbyImageData } from "gatsby-plugin-image";

export type AllBlogType = {
  allMdx: {
    nodes: {
      id: number;
      frontmatter: BlogFrontmatterType;
    }[];
  };
};

export type BlogFrontmatterType = {
  date: string;
  title: string;
  slug: string;
  tags: string[];
  thumbnail_image_alt: string;
  thumbnail_image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData | null;
    } | null;
  } | null;
};

export type BlogDetailType = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      tags: string[];
      slug: string;
    };
    excerpt: string;
    tableOfContents: TableOfContentsType;
  };
};

export type TableOfContentsType = {
  items: ContentsItemType[];
};

export type ContentsItemType = {
  url: string;
  title: string;
  items?: ContentsItemType[];
};
