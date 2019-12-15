import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/atoms/postLink';

interface Props {
  data: any;
}

const Posts: React.FC<Props> = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return <Layout>{Posts}</Layout>;
};
export default Posts;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
