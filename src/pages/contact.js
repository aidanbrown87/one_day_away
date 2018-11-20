import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <h3>Contact Page</h3>
      <p>
        If this is your first visit, hello! If you're here again for a little
        more escapism, thank you and welcome back
      </p>
      <p>
        Whether you're interested in collaborating and sponsorship, or maybe you
        just want to chat, please do contact us on{' '}
        <a href="mailto:hello@onedayaway.co.uk?Subject=Hello" target="_top">
          hello@onedayaway.co.uk
        </a>
      </p>
    </Layout>
  )
}

export default Contact
