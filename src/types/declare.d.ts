export type ThemeType = "dark" | "light";

declare module "@emotion/react" {
  export interface Theme {
    mode: {
      text: string;
      backgroundColor: string;
      headerDimmedBackgroundColor: string;
      blogThumbnailBackgroundColor: string;
      blogThumbnailIconColor: string;
      dividerColor: string;
      tagBackgroundColor: string;
      tagHoverBackgroundColor: string;
    };
  }
}
