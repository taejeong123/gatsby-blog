import { BlogDetailType } from "@/types";
import { Flex, GlobalLayout, Seo, TableOfContents, Tag } from "@/ui";
import styled from "@emotion/styled";
import { PageProps, graphql } from "gatsby";
import React from "react";

const BlogPost = ({ data, children }: PageProps<BlogDetailType>) => {
  // const contentRef = useRef<HTMLDivElement>(null);
  const {
    mdx: { frontmatter },
  } = data;

  // useEffect(() => {
  //   if (!contentRef.current) return;
  //   const headingEl = contentRef.current.querySelectorAll<HTMLElement>(
  //     ".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"
  //   );

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const targets = entries.filter(
  //         (entry) => entry.isIntersecting && entry.intersectionRatio >= 1
  //       );

  //       if (targets.length === 0) return;

  //       contentRef.current
  //         ?.querySelectorAll(".highlight")
  //         .forEach((el) => el.classList.remove("highlight"));

  //       targets.forEach((it) => {
  //         const targetId = it.target.getAttribute("id");
  //         const linkSelector = `.toc a[href='#${encodeURI(targetId ?? "")}']`;
  //         const linkElement = contentRef.current?.querySelector(linkSelector);
  //         linkElement?.classList.add("highlight");
  //       });
  //     },
  //     { threshold: 1.0 }
  //   );

  //   headingEl.forEach((el) => observer.observe(el));
  //   return () => observer.disconnect();
  // }, []);

  return (
    <GlobalLayout>
      <StyledBlogContentHeader gap="10px" flexDirection="column">
        <Flex gap="10px">
          {frontmatter.tags.map(
            (tag, i) =>
              tag && (
                <Tag key={`${tag}_${i}`} tag={tag}>
                  {tag}
                </Tag>
              )
          )}
        </Flex>

        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
      </StyledBlogContentHeader>

      <div style={{ marginTop: "50px" }}>
        <TableOfContents
          items={data.mdx.tableOfContents.items}
          slug={frontmatter.slug}
        />

        {children}
      </div>
    </GlobalLayout>
  );
};

export const query = graphql`
  query Mdx($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        slug
      }
      excerpt
      tableOfContents
    }
  }
`;

export const Head = ({ data }: { data: BlogDetailType }) => {
  const {
    mdx: { frontmatter, excerpt },
  } = data;
  const title = frontmatter.title;
  return title && excerpt && <Seo title={title} description={excerpt} />;
};

export default BlogPost;

const StyledBlogContentHeader = styled(Flex)`
  & > h1 {
    margin: 0;
  }

  & > span {
    font-size: 14px;
  }
`;
