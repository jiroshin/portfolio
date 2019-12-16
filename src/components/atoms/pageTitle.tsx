import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

interface Props {
  pageTitle: string;
  linkPath: string;
}

const PageTitle: React.FC<Props> = ({ pageTitle, linkPath }) => (
  <StyledLink to={linkPath}>{pageTitle}</StyledLink>
);
export default PageTitle;

const StyledLink = styled(Link)`
  font-size: 150%;
  font-weight: bold;
  font-family: 'Mongolian Baiti','sans-serif', 'Bodoni 72','Bodoni 72 Oldstyle';
  text-decoration: none;
  color: #a7a7a7;
  padding: 0 20px;
`;
