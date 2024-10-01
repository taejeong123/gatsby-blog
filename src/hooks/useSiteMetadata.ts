import { graphql, useStaticQuery } from "gatsby";

export type SiteMetadataType = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};
export const useSiteMetadata = () => {
  const data = useStaticQuery<SiteMetadataType>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site?.siteMetadata;
};
