import { Color } from "@/ui";
import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  mode: {
    text: Color.DarkMossGray,
    backgroundColor: Color.MonoWhiteText,
    headerDimmedBackgroundColor: Color.DimmedWhite,
    blogThumbnailBackgroundColor: Color.MonoGray02,
    blogThumbnailIconColor: Color.MonoGray01,
    dividerColor: Color.MonoGray02,
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
  },
};
