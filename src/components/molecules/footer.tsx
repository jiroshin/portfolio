import * as React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => (
  <>
    <Copyright>(c) 2019 Sugita Shinjiro</Copyright>
  </>
);
export default Footer;

const Copyright = styled.p`
  color: #616161;
  font-size: 80%;
  text-align: center;
  margin-top: 10px;
`;
