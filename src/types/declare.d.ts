export type ThemeType = "dark" | "light";

declare module "@emotion/react" {
  export interface Theme {
    mode: {
      text: string;
      backgroundColor: string;
      dividerColor: string;
    };
  }
}
