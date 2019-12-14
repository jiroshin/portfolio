import * as React from "react"
import styled from "styled-components"
import Title from "../atoms/title"
import { Link } from "gatsby"

const Header: React.FC = () => (
  <Div>
    <HeaderContents>
      <StyledLink to="/">
        <Img src={`/config-images/mamu100.png`} alt="logo" />
        <Title title={"jiroshin.dev"} />
      </StyledLink>
    </HeaderContents>
  </Div>
)
export default Header

const Div = styled.div`
  width: 100%;
  background-color: #fdffff;
  padding: 6px;
  position: relative;
  box-shadow: 0 2px 5px #00000033;
`

const HeaderContents = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Img = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 0 0 30px 30px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #212121;
`
