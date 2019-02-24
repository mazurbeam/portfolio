import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import {Box, Card, Text, Heading} from 'rebass';


class ProjectPage extends Component {
    render() { 
        const project = get(this.props, 'data.contentfulProject')
        // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        return ( 
            <Box>
                <Helmet title={project.name}/>
                <Card>
                    <Heading>{project.name}</Heading>
                    <Text>{project.description}</Text>
                </Card>
            </Box>
         );
    }
}
 
export default ProjectPage;

export const pageQuery = graphql`
  query ProjectPageBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      description
    }
  }
`