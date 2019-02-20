import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import navStyles from './nav.module.css'
import logo from './ODA_Logo_b.png'
import fb from './facebook-logo.png'
import insta from './instagram-logo.png'
import menu from './menu-button.png'

export const SocialMedia = () => (
  <div className={navStyles.socialNav}>
    <a
      href="https://www.facebook.com/onedayawayblog"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={navStyles.social} src={fb} />
    </a>
    <a
      href="https://www.instagram.com/onedayaway_blog/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={navStyles.social} src={insta} />
    </a>
  </div>
)

const ListLink = props => (
  <Link to={props.to} className={navStyles.navItem}>
    <span>{props.children}</span>
  </Link>
)

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { menuOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <header className={navStyles.header}>
        <Link to={'/'} style={{ border: 'none', margin: 0 }}>
          <img className={navStyles.logo} src={logo} />
        </Link>
        <button onClick={this.toggleMenu} className={navStyles.menuButton}>
          <img
            src={menu}
            style={{ width: 18, height: 'auto', marginBottom: 0 }}
          />
        </button>
        <nav
          className={navStyles.nav}
          style={{ width: this.state.menuOpen ? 300 : null }}
        >
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <div className={navStyles.secondaryNav}>
            <SocialMedia />
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav
