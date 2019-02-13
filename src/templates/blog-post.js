import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import blogPostStyle from './blog-post.module.css'
import PlaneBreak from '../components/PlaneBreak';
import PostHeroImage from '../components/HeroImage.1';
import PrevNextButton from '../components/PrevNextButton';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        {/* <div>
          <Img fluid={post.frontmatter.heroImage.childImageSharp.fluid} />
        </div> */}
        <PostHeroImage
          height={60}
          fluid={post.frontmatter.heroImage.childImageSharp.fluid}
          position={post.frontmatter.heroImagePosition}
        />   

        <div className={blogPostStyle.content} >
          <h2>{post.frontmatter.title}</h2>
          <div
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            {post.frontmatter.date}
          </div>
          <PlaneBreak />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
              width: '100%'
            }}
          >
            <PrevNextButton isPrev linkObject={previous} />
            <PrevNextButton linkObject={next} />            
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImagePosition
      }
    }
  }
`
