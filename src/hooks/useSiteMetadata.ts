import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data: GatsbyTypes.SiteMetadataQuery =
    useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

  return data.site?.siteMetadata;
};
