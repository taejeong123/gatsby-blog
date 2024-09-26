import { Flex, GlobalLayout } from "@/ui";
import * as React from "react";

const NotFoundPage = () => {
  return (
    <GlobalLayout>
      <Flex justifyContent="center">
        <h1>404 Page not found</h1>
      </Flex>
    </GlobalLayout>
  );
};

export const Head = () => <title>Not found</title>;

export default NotFoundPage;
