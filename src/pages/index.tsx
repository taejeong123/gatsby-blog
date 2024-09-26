import { Flex, GlobalLayout, Seo, Tag } from "@/ui";
import styled from "@emotion/styled";
import { Link, graphql, navigate } from "gatsby";
import React from "react";

type IndexPageProps = {
  data: GatsbyTypes.AllMdxQuery;
};
const IndexPage = ({ data }: IndexPageProps) => {
  const handleOnClickArticle = (slug: string) => {
    if (slug) navigate(`/blog/${slug}`);
  };

  return (
    <GlobalLayout>
      <p>Welcome to my Blog 🔥</p>

      <StyledContainer>
        {data.allMdx.nodes.map((node) => (
          <StyledCardContent key={node.id}>
            <StyledImageBox
              onClick={() => handleOnClickArticle(node.frontmatter?.slug || "")}
            ></StyledImageBox>

            <Flex gap="5px" flexDirection="column">
              <h3>
                <Link to={`/blog/${node.frontmatter?.slug}`}>
                  {node.frontmatter?.title}
                </Link>
              </h3>
              <span>{node.frontmatter?.date}</span>
              <Flex gap="10px">
                {node.frontmatter?.tags?.map((tag, i) => (
                  <Tag key={`${tag}_${i}`}>{tag}</Tag>
                ))}
              </Flex>
            </Flex>
          </StyledCardContent>
        ))}
      </StyledContainer>
    </GlobalLayout>
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

export const Head = () => <Seo title="My blog posts" />;

export default IndexPage;

const StyledContainer = styled(Flex)`
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;

  & > article {
    width: calc(100% / 3 - 13.4px);
  }
`;

const StyledImageBox = styled.div`
  width: 100%;
  height: 150px;
  background-color: gray;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledCardContent = styled.article`
  & h3 {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & span {
    font-size: 12px;
  }
`;
