import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import blogPostStyle from './blog-post.module.css'
import PlaneBreak from '../components/PlaneBreak'
import PostHeroImage from '../components/HeroImage'
import PrevNextButton from '../components/PrevNextButton'
import LocationData from '../components/LocationData'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const {
      frontmatter: {
        country,
        region,
        title,
        heroImage,
        heroImagePosition,
        date,
      },
    } = post

    console.log({ location: this.props.location })

    const disqusShortname = 'onedayaway'
    const disqusConfig = {
      url: this.props.location.href,
      identifier: title,
      title: title,
    }

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'description', content: siteDescription },
            {
              name: 'og:image',
              content: `${siteUrl}${heroImage.childImageSharp.fluid.src}`,
            },
          ]}
          title={`${title} | ${siteTitle}`}
        />
        <PostHeroImage
          height={60}
          fluid={heroImage.childImageSharp.fluid}
          position={heroImagePosition}
        />

        <div className={blogPostStyle.content}>
          <h2>{title}</h2>
          <LocationData region={region} country={country} />
          <div
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            {date}
          </div>
          <PlaneBreak />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <div style={{ width: '100%' }}>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
              width: '100%',
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
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        country
        region
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
