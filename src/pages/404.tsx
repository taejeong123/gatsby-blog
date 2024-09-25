import { Link } from "gatsby";
import * as React from "react";

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>
    </main>
  );
};

export const Head = () => <title>Not found</title>;

export default NotFoundPage;
