import * as React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => <P>{title}</P>;
export default Title;

const P = styled.p`
  font-size: 30px;
  display: inline-block;
  margin: 0 39px;
  vertical-align: 11pt;
  font-family: 'Georgia', 'Big Caslon', 'Bodoni 72', 'Bodoni 72 Oldstyle',
    'Mongolian Baiti', sans-serif;
`;
