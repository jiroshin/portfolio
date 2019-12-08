import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"
import 'normalize.css';

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
export default Layout;

const GlobalStyle = createGlobalStyle`
body {
  background-color: #BDBDBD;
  fontsize: 500px;
  font-family: 'ヒラギノ角ゴ Pro W3','ヒラギノ角ゴ W3', 'メイリオ', 'ＭＳ Ｐゴシック',sans-serif;
  /* main font size */
  --title-size: 22px;
  --section-title-size: 26px;
  --page-title-size: 20px;
  --normal-size: 16px;
  --small-size: 12px;
  /* blog font size */
  --blog-h1-size: 24px;
  --blog-h2-size: 22px;
  --blog-h3-size: 20px;
  --blog-h4-size: 18px;
  --blog-h5-size: 16px;
  --blog-h6-size: 14px;
}
p {
  color: black;
  font-size:100px;
}
`;
