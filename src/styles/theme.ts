import { Color } from "@/ui";
import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  mode: {
    modeName: "light",
    primaryText: Color.DarkMossGray,
    secondaryText: Color.MonoGray00,
    tocText: Color.MonoGray01,
    backgroundColor: Color.MonoWhite,
    headerDimmedBackgroundColor: Color.DimmedWhite,
    blogThumbnailBackgroundColor: Color.MonoGray03,
    blogThumbnailIconColor: Color.MonoGray02,
    dividerColor: Color.MonoGray03,
    tagBackgroundColor: Color.MonoGray03,
    tagHoverBackgroundColor: Color.MonoGray02,
    tableBorderColor: Color.MonoGray03,
  },
};

export const darkTheme: Theme = {
  mode: {
    modeName: "dark",
    primaryText: Color.MonoWhiteText,
    secondaryText: Color.MonoGray02,
    tocText: Color.MonoGray01,
    backgroundColor: Color.DarkMossGray,
    headerDimmedBackgroundColor: Color.DimmedDarkMossGray,
    blogThumbnailBackgroundColor: Color.MonoGray00,
    blogThumbnailIconColor: Color.MonoGray01,
    dividerColor: Color.MonoGray00,
    tagBackgroundColor: Color.MonoBlack01,
    tagHoverBackgroundColor: Color.MonoGray00,
    tableBorderColor: Color.MonoGray00,
  },
};
