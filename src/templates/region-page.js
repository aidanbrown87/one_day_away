import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Masonry from 'react-masonry-component'
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogTile from '../components/BlogTile'

const StyledLink = styled(Link)`
  padding: 5px;
  border: none;
  font-size: 0.9em;
`

class PostPageTemplate extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
            margin: '20px auto',
            maxWidth: 1200,
          }}
        >
          <h2>{this.props.pageContext.region}</h2>
          <Masonry
            options={{
              fitWidth: true,
              gutter: 10,
            }}
            style={{
              margin: '10px auto',
            }}
          >
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <BlogTile
                  key={node.fields.slug}
                  title={title}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                  thumb={node.frontmatter.thumbnail}
                />
              )
            })}
          </Masonry>
          <StyledLink
            to={this.props.pageContext.country.replace(' ', '')}
            className=""
          >
            More posts from {this.props.pageContext.country}
          </StyledLink>
        </div>
      </Layout>
    )
  }
}

export default PostPageTemplate

export const pageQuery = graphql`
  query($region: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { region: { eq: $region } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
