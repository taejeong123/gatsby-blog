import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data: Queries.SiteMetadataQuery =
    useStaticQuery<Queries.SiteMetadataQuery>(graphql`
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
