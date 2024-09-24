import { useSiteMetadata } from "@/hooks";
import React from "react";

type SeoProps = {
  title: string;
};
export const Seo = ({ title }: SeoProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <title>
      {title} | {siteMetadata?.title}
    </title>
  );
};
