import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import {Box, Card, Heading} from 'rebass';


class ProjectPage extends Component {
    render() { 
        const post = get(this.props, 'data.contentfulBlogPost')
        // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        return (
          <Layout>
            <Box>
                <Helmet title={post.title}/>
                <Card>
                    <Heading>{post.title}</Heading>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: post.description.childMarkdownRemark.html,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                        __html: post.body.childMarkdownRemark.html,
                        }}
                    />
                </Card>
            </Box>
          </Layout>
         );
    }
}
 
export default ProjectPage;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
            html
          }
      }
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
            html
          }
      }
    }
  }
`