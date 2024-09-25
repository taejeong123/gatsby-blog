import { Flex, Layout, Seo, Tag } from "@/ui";
import styled from "@emotion/styled";
import { Link, graphql, navigate } from "gatsby";
import React from "react";

type BlogPageProps = {
  data: GatsbyTypes.AllMdxQuery;
};
const BlogPage = ({ data }: BlogPageProps) => {
  const handleOnClickArticle = (slug: string) => {
    if (slug) navigate(slug);
  };

  return (
    <Layout>
      <h1>Blogs</h1>

      <StyledContainer>
        {data.allMdx.nodes.map((node) => (
          <article
            key={node.id}
            onClick={() => handleOnClickArticle(node.frontmatter?.slug || "")}
          >
            <StyledImageBox></StyledImageBox>

            <Flex flexDirection="column">
              <h3>
                <Link to={`/blog/${node.frontmatter?.slug}`}>
                  {node.frontmatter?.title}
                </Link>
              </h3>
              <p>{node.frontmatter?.date}</p>
              <Flex gap="10px">
                {node.frontmatter?.tags?.map((tag, i) => (
                  <Tag key={`${tag}_${i}`}>{tag}</Tag>
                ))}
              </Flex>
            </Flex>
          </article>
        ))}
      </StyledContainer>
    </Layout>
  );
};

export const query = graphql`
  query AllMdx {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          tags
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

const StyledContainer = styled(Flex)`
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;

  & > article {
    width: calc(100% / 3 - 20px);
    cursor: pointer;
  }
`;

const StyledImageBox = styled.div`
  width: 100%;
  height: 150px;
  background-color: gray;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;
