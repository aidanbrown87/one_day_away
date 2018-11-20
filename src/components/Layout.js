import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import layoutStyle from './layout.module.css'
import Nav from './Nav';
import Footer from './footer';

class Layout extends React.Component {

  render() {
    const { children } = this.props
    
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          // maxWidth: rhythm(24),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Nav />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
