import { Color } from "@/ui";
import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  mode: {
    text: Color.DarkMossGray,
    backgroundColor: Color.MonoWhite,
    headerDimmedBackgroundColor: Color.DimmedWhite,
    blogThumbnailBackgroundColor: Color.MonoGray03,
    blogThumbnailIconColor: Color.MonoGray02,
    dividerColor: Color.MonoGray03,
    tagBackgroundColor: Color.MonoGray03,
    tagHoverBackgroundColor: Color.MonoGray02,
  },
};

export const darkTheme: Theme = {
  mode: {
    text: Color.MonoWhiteText,
    backgroundColor: Color.DarkMossGray,
    headerDimmedBackgroundColor: Color.DimmedDarkMossGray,
    blogThumbnailBackgroundColor: Color.MonoGray00,
    blogThumbnailIconColor: Color.MonoGray01,
    dividerColor: Color.MonoGray00,
    tagBackgroundColor: Color.MonoBlack01,
    tagHoverBackgroundColor: Color.MonoGray00,
  },
};
