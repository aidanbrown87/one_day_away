import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Masonry from 'react-masonry-component'

import Layout from '../components/Layout'
import BlogTile from '../components/BlogTile'
import ImageCarousel from '../components/ImageCarousel'

class BlogIndex extends React.Component {

  formatCarouselImages() {
    return get(this, 'props.data.imagesHero.edges').map(node => {
      return {
        ...node.node.frontmatter.heroImage.childImageSharp.fluid,
        position: node.node.frontmatter.heroImagePosition,
      }
    })
  }

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
        <ImageCarousel images={this.formatCarouselImages()} />
        {/* <PostHeroImage
          image={heroImage.heroImage.childImageSharp.fluid.src}
          height={60}
          position={heroImage.heroImagePosition}
        /> */}
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
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
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
    imagesHero: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            heroImage {
              childImageSharp {
                fluid(maxWidth: 1240) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heroImagePosition
          }
        }
      }
    }
  }
`
