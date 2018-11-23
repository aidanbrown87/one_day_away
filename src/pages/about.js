import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import PlaneBreak from '../components/PlaneBreak'
import PostHeroImage from '../components/HeroImage'

import judey from './images/judey.jpg'
import ajb from './images/ajb.jpg'
import judeandidan from './images/JudeAndAidan.jpg'

const judithText1 =
  "Throughout my life I have been fortunate enough to wander many corners of this wonderful planet we call home. My parents truly understood that 'travel is fatal to prejudice, bigotry & narrow mindedness' & this lesson has lived with me ever since"
const judithText2 =
  'From extended trips across continents and around the world, to afternoons spent close to home, it seems ever more relevant to escape our bubbles and explore. This blog is our means of simple story-telling; sometimes exotic, sometimes on our doorstep, always just one day at a time.'
const judithText3 =
  "As a fervent organiser extraordinaire, I'm a staunch believer that with a little planning one day really is all you need. And whether that day turns into weeks, months or even years, as Hemingway aptly summises 'it's the journey that matters in the end'."
const aidanText = "I'm just here for the food"

const About = () => {
  return (
    <Layout>
      <PostHeroImage image={judeandidan} height={60} />
      <div className="content">
        <h3 className="title">About Us</h3>
        <PlaneBreak />

        <img
          src={judey}
          alt="jude"
          style={{
            height: 200,
            width: 'auto',
            borderRadius: '50%',
            gridColumn: 'span 2',
          }}
        />
        <div>{judithText1}</div>
        <div>{judithText2}</div>
        <div>{judithText3}</div>
        <img
          src={ajb}
          alt="aidan"
          style={{
            height: 200,
            width: 'auto',
            borderRadius: '50%',
            gridColumn: 'span 2',
          }}
        />
        <div>{aidanText}</div>
        <hr />
      </div>
    </Layout>
  )
}

export default About
