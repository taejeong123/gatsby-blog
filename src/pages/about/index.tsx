import { Layout } from "@/components";
import React from "react";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm Front-End developer work in korea.</p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
