import { GlobalLayout, Seo } from "@/ui";
import React from "react";

const AboutPage = () => {
  return (
    <GlobalLayout>
      <h3>I'm Front-End developer work in korea.</h3>
    </GlobalLayout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
