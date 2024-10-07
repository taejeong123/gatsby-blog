import { StyledLink } from "@/styles";
import { BlogFrontmatterType } from "@/types";
import { Flex, Icon, Tag } from "@/ui";
import styled from "@emotion/styled";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type BlogCardProps = {
  frontmatter: BlogFrontmatterType;
};
export const BlogCard = ({ frontmatter }: BlogCardProps) => {
  const { date, slug, tags, thumbnail_image, thumbnail_image_alt, title } =
    frontmatter;

  const handleOnClickArticle = (slug: string) => {
    if (slug) navigate(`/blog/${slug}`);
  };

  return (
    <StyledCardContent>
      <StyledImageBox
        justifyContent="center"
        alignItems="center"
        onClick={() => handleOnClickArticle(slug)}
      >
        {thumbnail_image?.childImageSharp?.gatsbyImageData ? (
          <StyledThumbnailImage
            image={thumbnail_image?.childImageSharp.gatsbyImageData}
            alt={thumbnail_image_alt}
          />
        ) : (
          <StyledIconWrapper>
            <Icon variant="Image" size="20px" />
          </StyledIconWrapper>
        )}
      </StyledImageBox>

      <Flex gap="5px" flexDirection="column">
        <h3>
          <StyledLink to={`/blog/${slug}`}>{title}</StyledLink>
        </h3>
        <span>{date}</span>

        <Flex gap="10px">
          {tags.map((tag, i) => (
            <Tag key={`${tag}_${i}`} tag={tag}>
              {tag}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </StyledCardContent>
  );
};

const StyledCardContent = styled.article`
  & h3 {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & span {
    font-size: 12px;
  }
`;

const StyledImageBox = styled(Flex)`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.mode.blogThumbnailBackgroundColor};
  border-radius: 8px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

const StyledIconWrapper = styled.div`
  color: ${({ theme }) => theme.mode.blogThumbnailIconColor};
  opacity: 0.5;
`;
