import * as React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const WhatIUse: React.FC = () => (
  <Layout>
    <ToolList>
      <li style={{margin:'30px 5px'}}>
        <ToolName>Scrapbox</ToolName>
        <ToolDesc>ブログより簡易的なアウトプットができます。思考の整理や知識のメモに使います。UX最高です。</ToolDesc>
      </li> 
      <li style={{margin:'30px 5px'}}>
        <ToolName>Vim</ToolName>
        <ToolDesc>使いやすいエディターです。UX最高です。</ToolDesc>
      </li>
      <li style={{margin:'30px 5px'}}>
        <ToolName>Alfred</ToolName>
        <ToolDesc>簡単に説明するとSpotlight検索の上位互換です。使い心地に感動して永久ライセンスを買いました。</ToolDesc>
      </li>
      <li style={{margin:'30px 5px'}}>
        <ToolName>Alacritty</ToolName>
        <ToolDesc>True color, 256colorに対応している速いターミナルエミュレータです。ただし日本語に弱いため心の目でタイピングする必要があります。</ToolDesc>
      </li>
    </ToolList>
  </Layout>
);
export default WhatIUse;

const ToolList = styled.ul`
  list-style: none;
  padding-inline-start: unset;
`;

const ToolName = styled.p`
  font-size: 120%;
  font-weight: bold;
`;

const ToolDesc = styled.p`
  padding-inline-start: 5px;
`;
