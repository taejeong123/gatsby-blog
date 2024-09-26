import { GlobalLayout, Seo } from "@/ui";
import React from "react";

const AboutPage = () => {
  return (
    <GlobalLayout>
      <p>I'm Front-End developer work in korea.</p>
    </GlobalLayout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
