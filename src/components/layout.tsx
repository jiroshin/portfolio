import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./molecules/header"
import Footer from "./molecules/footer"
import MenuBar from "./molecules/menubar"

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <Wrapper>
      <MenuBar />
      <ContentsWrapper>
        {children}
      </ContentsWrapper>
      <Footer />
    </Wrapper>
  </React.Fragment>
)
export default Layout

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const ContentsWrapper = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  min-height: 400px;
`

const GlobalStyle = createGlobalStyle`
body {
  background-color: #eceff126;
  color: #212121;
  font-family: 'ヒラギノ角ゴシック','Hiragino Sans','ＭＳ Ｐゴシック','MS PGothic','Mongolian Baiti','Iowan Old Style','AppleColorEmoji','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
  margin: 0;
}
`
