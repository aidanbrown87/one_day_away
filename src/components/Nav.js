import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import navStyles from './nav.module.css'
import logo from './ODA_Logo_b.png'

const SocialMedia = () => (
  <div className={navStyles.socialNav}>
    <a
      href="https://www.facebook.com/onedayawayblog"
      target="_blank"
      rel="noopener noreferrer"
      className="socicon-facebook"
    />
    <a
      href="https://www.instagram.com/onedayaway_blog/"
      target="_blank"
      rel="noopener noreferrer"
      className="socicon-instagram"
    />
  </div>
)

const ListLink = props => (
  <Link to={props.to} className={navStyles.navItem}>
    <span>{props.children}</span>
  </Link>
)

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <header className={navStyles.header}>
        <Link to={'/'} style={{ boxShadow: 'none', margin: 0 }}>
          <img
            src={logo}
            style={{
              width: 'auto',
              height: 100,
              margin: 0,
            }}
          />
        </Link>
        <button onClick={this.toggleMenu} className={navStyles.menuButton}>Menu</button>
        <nav className={navStyles.nav} style={{ width: this.state.menuOpen ? 250 : null }}>
          <ListLink to="/">HOME</ListLink>
          <ListLink to="/about/">ABOUT</ListLink>
          <ListLink to="/contact/">CONTACT</ListLink>
          <div className={navStyles.secondaryNav}>
            <SocialMedia />
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav
