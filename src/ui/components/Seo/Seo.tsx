import { useSiteMetadata } from "@/hooks";
import React from "react";

type SeoProps = {
  title?: string;
  description?: string;
};
export const Seo = ({ title, description }: SeoProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <title>{title}</title>
      <meta
        name="discription"
        content={description || siteMetadata.description}
      />
    </>
  );
};
