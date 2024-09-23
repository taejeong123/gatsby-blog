import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
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

export default useSiteMetadata;
