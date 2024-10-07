import { Color } from "@/ui";
import { Global, Theme, css } from "@emotion/react";
import React from "react";

const baseStyle = (theme: Theme) => css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

  /* box-sizing 규칙을 명시합니다. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: Pretendard !important;
    /* margin: 0;
    padding: 0; */
  }

  /* 폰트 크기의 팽창을 방지합니다. */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* 기본 여백을 제거하여 작성된 CSS를 더 잘 제어할 수 있습니다. */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin-block-end: 0;
  }

  /* list를 role값으로 갖는 ul, ol 요소의 기본 목록 스타일을 제거합니다. */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* 핵심 body의 기본값을 설정합니다. */
  body {
    /* min-height: 100vh; */
    line-height: 1.5;

    color: ${theme.mode.primaryText};
    background-color: ${theme.mode.backgroundColor};
  }

  /* 제목 요소와 상호작용하는 요소에 대해 line-height를 더 짧게 설정합니다. */
  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    line-height: 1.1;
  }

  /* 클래스가 없는 기본 a 태그 요소는 기본 스타일을 가져옵니다. */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* 이미지 관련 작업을 더 쉽게 합니다. */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* input 및 button 항목들이 글꼴을 상속하도록 합니다. */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* 행 속성이 없는 textarea가 너무 작지 않도록 합니다. */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* 고정된 모든 항목에는 여분의 스크롤 여백이 있어야 합니다. */
  :target {
    scroll-margin-block: 5ex;
  }

  /* prismjs style */
  // 블록 코드 스타일
  pre[class*="language-"] {
    font-size: 14px;
    line-height: 1.5;
    border-radius: 8px;
  }

  // 인라인 코드 블록 스타일
  span > code[class*="language-"] {
    font-size: 14px;
    padding: 2px 4px;
    color: ${Color.Sandstone};
  }

  table {
    margin: 10px 0;
    border-collapse: collapse;

    & th,
    td {
      padding: 6px 12px;
      border: 1px solid ${theme.mode.tableBorderColor};
    }
  }

  // autolink headers
  a.anchor-header {
    fill: ${theme.mode.primaryText};
  }
`;

export const GlobalStyle = () => <Global styles={baseStyle} />;
