import { Color } from "@/ui";
import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  mode: {
    text: Color.DarkMossGray,
    backgroundColor: Color.MonoWhiteText,
    headerDimmedBackgroundColor: Color.DimmedWhite,
    dividerColor: Color.MonoGray02,
  },
};

export const darkTheme: Theme = {
  mode: {
    text: Color.MonoWhiteText,
    backgroundColor: Color.DarkMossGray,
    headerDimmedBackgroundColor: Color.DimmedDarkMossGray,
    dividerColor: Color.MonoGray00,
  },
};
