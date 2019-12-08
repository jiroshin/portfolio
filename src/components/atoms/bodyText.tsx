import * as React from "react"
import styled from "styled-components"

interface Props {
  text: string;
}

const BodyText: React.FC<Props> = (text) => (
  <P>{text}</P>
);
export default BodyText;

const P = styled.p`
  font-size: ;
`;
