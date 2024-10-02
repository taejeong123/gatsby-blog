export type ThemeType = "dark" | "light";

declare module "@emotion/react" {
  export interface Theme {
    mode: {
      modeName: ThemeType;
      primaryText: string;
      secondaryText: string;
      backgroundColor: string;
      headerDimmedBackgroundColor: string;
      blogThumbnailBackgroundColor: string;
      blogThumbnailIconColor: string;
      dividerColor: string;
      tagBackgroundColor: string;
      tagHoverBackgroundColor: string;
      tableBorderColor: string;
    };
  }
}
