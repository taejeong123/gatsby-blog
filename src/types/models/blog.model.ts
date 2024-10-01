import { IGatsbyImageData } from "gatsby-plugin-image";

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

export type AllBlogType = {
  allMdx: {
    nodes: {
      id: number;
      frontmatter: BlogFrontmatterType;
    }[];
  };
};
