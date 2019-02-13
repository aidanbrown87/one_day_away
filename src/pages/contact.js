import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import PostHeroImage from '../components/HeroImage.1';

import contact from './images/contact.jpg'
import genericStyles from './genericStyle.module.css'
import PlaneBreak from '../components/PlaneBreak';
import { SocialMedia } from '../components/Nav';

const Contact = ({ data }) => {
  return (
    <Layout>
      <PostHeroImage fluid={data.file.childImageSharp.fluid} height={60} position="center" />
      <div className={genericStyles.content}>
        <h2>Contact Us</h2>
        <PlaneBreak />
        <div>
          If this is your first visit, hello! If you're here again for some
          more escapism, thank you and welcome back.
          </div>
        <div>
          To get in touch, message us on our social pages or feel free to drop a note to {' '}
          <a href="mailto:hello@onedayaway.co.uk?Subject=Hello" target="_top">
            hello@onedayaway.co.uk
          </a>
        </div>
        <SocialMedia />
      </div>
      
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    file(relativePath: { eq: "images/contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`