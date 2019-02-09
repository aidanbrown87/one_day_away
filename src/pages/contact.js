import React from 'react'
import Layout from '../components/Layout'
import PostHeroImage from '../components/HeroImage';

import contact from './images/contact.jpg'
import genericStyles from './genericStyle.module.css'
import PlaneBreak from '../components/PlaneBreak';
import { SocialMedia } from '../components/Nav';

const Contact = () => {
  return (
    <Layout>
      <PostHeroImage image={contact} height={60} position="center" />
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
