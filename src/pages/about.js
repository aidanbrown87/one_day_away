import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import PlaneBreak from '../components/PlaneBreak'
import PostHeroImage from '../components/HeroImage.1'

import judey from './images/judey.jpg'
import ajb from './images/ajb.jpg'
import judeandidan from './images/JudeAndAidan.jpg'
import genericStyles from './genericStyle.module.css'

const judithText1 =
  "Throughout my life, I have been fortunate enough to wander many corners of this wonderful planet we call home. My parents truly understood that 'travel is fatal to prejudice, bigotry and narrow mindedness', and this lesson has lived with me since."
const judithText2 =
  "From extended trips across continents to afternoons spent closer to home, it seems ever more relevant to escape our bubbles and explore. This blog is our means of simple story-telling: sometimes exotic, sometimes on our doorstep, but (mostly) just one day at a time."
const judithText3 =
  "As a fervent organiser, I'm a staunch believer that with a little planning, one day really is all you need. And whether that day turns into weeks, months or even years... as Hemingway aptly asserts, 'it's the journey that matters in the end'."
const aidanText = "I'm just here for the food."

const About = ({ data }) => {
  return (
    <Layout>
      <PostHeroImage fluid={data.judeaidan.childImageSharp.fluid} height={60} position='bottom' />
      <div className={genericStyles.content}>
        <h2>About Us</h2>
        <PlaneBreak />

        <h3>Jude</h3>
        <Img
          fixed={data.judey.childImageSharp.fixed}
          alt="jude"
          style={{
            borderRadius: '50%',
          }}
        />
        <p >{judithText1}</p>
        <p >{judithText2}</p>
        <p>{judithText3}</p>
        <h3>Aidan</h3>
        <Img
          fixed={data.aidan.childImageSharp.fixed}
          alt="aidan"
          style={{
            borderRadius: '50%',
          }}
        />
        <p>{aidanText}</p>
        <hr />
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    judeaidan: file(relativePath: { eq: "images/JudeAndAidan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    judey: file(relativePath: { eq: "images/judey.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    aidan: file(relativePath: { eq: "images/ajb.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`