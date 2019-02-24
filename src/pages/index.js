import React, { Component } from "react"
import { Link } from "gatsby"
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Card, Heading, Text} from 'rebass'
class IndexPage extends Component {
  render() {

    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (

      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          {posts.map(({ node }) => {
            return (
              <div key={node.id}>
                <Heading><Link to={`/blog/${node.slug}`}>{node.title}</Link></Heading>

              </div>
            )
          })}
        </div>
        <div>

        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          }
        }
      }  
    allContentfulProject {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
  }
`