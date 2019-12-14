import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface Props {
  pageTitle: string;
  linkPath: string;
}

const PageTitle: React.FC<Props> = ({ pageTitle, linkPath }) => (
  <StyledLink to={linkPath}>
    {pageTitle}
  </StyledLink>
)
export default PageTitle

const StyledLink = styled(Link)`
  font-size: 115%;
  font-weight: bold;
  font-family: 'Georgia', 'Big Caslon','Bodoni 72','Bodoni 72 Oldstyle','Mongolian Baiti',sans-serif;
  text-decoration: none;
  color: #212121;
  padding: 0 20px;
`
