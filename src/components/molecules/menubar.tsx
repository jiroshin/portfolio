import * as React from "react"
import styled from "styled-components"
import PageTitle from "../atoms/pageTitle"

const MenuBar: React.FC = () => (
  <Div>
    <PageTitle pageTitle="Profile" linkPath="/" />
    <PageTitle pageTitle="Posts" linkPath="/posts" />
    <PageTitle pageTitle="Playground" linkPath="/playground" />
  </Div>
)
export default MenuBar

const Div = styled.div`
  text-align: center;
  margin: 10px 2px;
`
