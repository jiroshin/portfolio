import React, { FC } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const IndexPage: FC = () => {
  library.add(fab);

  return (
    <Layout>
      <Img src={`/config-images/profile.png`} alt="profile-image" />
      <ProfileTitle># Sugita Shinjiro</ProfileTitle>
      <ProfileText>杉田 親次朗 / すぎたしんじろう / jiroshin</ProfileText>
      <Icons>
        <a href="https://twitter.com/jiroshin_">
          <Icon
            icon={['fab', 'twitter-square']}
            style={{ color: '#00aced' }}
          />
        </a>

        <a href="https://github.com/jiroshin">
          <Icon
            icon={['fab', 'github-square']}
            style={{ color: '#24292e' }}
          />
        </a>

        <a href="https://scrapbox.io/jiroshin-knowledge/">
          <Icon icon={faClipboard} style={{ color: '#39ac86' }} />
        </a>
      </Icons>
      <ProfileText>そのほか:  
        <A href="https://qiita.com/jiroshin">Qiitaアカウント</A>
      </ProfileText>
      <ProfileTitle># Like</ProfileTitle>
      <ProfileText>Ruby / Vim / TypeScript</ProfileText>
      <ProfileTitle># Hobby</ProfileTitle>
      <ProfileText>ロードバイク / キャンプ / つり</ProfileText>
      <ProfileText>コーヒー / プログラミング</ProfileText>
    </Layout>
  );
};
export default IndexPage;

const Img = styled.img`
  width: 100%;
  box-shadow: 0 0 10px -3px #263238;
`;

const Icons = styled.div`
  text-align: center;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 33px;
  font-size: 42px;
  margin: 5px 12px;
`;

const ProfileTitle = styled.p`
  margin: 25px auto 15px;
  max-width: 400px;
  padding: 0 5px;
  font-size: 130%;
  font-weight: bold;
`;

const ProfileText = styled.p`
  margin: 8px auto;
  max-width: 400px;
  padding: 0 5px;
`;

const A = styled.a`
  margin-left: 5px;
  color: #a7a7a7;
  text-decoration: none;
`;
