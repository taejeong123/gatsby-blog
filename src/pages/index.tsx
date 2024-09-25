import { Layout, Seo } from "@/ui";
import React from "react";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to my Blog 🔥</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
