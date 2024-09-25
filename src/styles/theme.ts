import { Color } from "@/ui";
import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  mode: {
    text: Color.DarkMossGray,
    backgroundColor: Color.MonoWhiteText,
    dividerColor: Color.DarkMossGray,
  },
};

export const darkTheme: Theme = {
  mode: {
    text: Color.MonoWhiteText,
    backgroundColor: Color.DarkMossGray,
    dividerColor: Color.MonoGray01,
  },
};
