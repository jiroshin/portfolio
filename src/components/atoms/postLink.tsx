import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface Props {
  post: any;
}

const PostLink: React.FC<Props> = ({ post }) => (
  <StyledLink to={post.frontmatter.path}>
    <Div>
      <p>{post.frontmatter.title}</p>
      <PostInfo>{post.frontmatter.date}</PostInfo>
    </Div>
  </StyledLink>
);
export default PostLink;

const Div = styled.div`
  margin: 15px 10px;
  padding: 15px;
  border: 1px solid #bdbdbd;
  box-shadow: 0 1px 8px #00000033;
`;

const PostInfo = styled.p`
  font-size: 70%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #00796B;
  font-size: 130%;
`;
