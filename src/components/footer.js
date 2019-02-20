import React, { Component } from 'react'
import logo from './circlelogo.jpg'
import Instagram from './instagram'
import style from './footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <Instagram />
        <footer>
          <div className={style.footerText}>
            <div className={style.element}>All rights reserved</div>
            <div className={style.element}>&copy; PrattBrown 2019</div>
          </div>
          <img className={style.footerLogo} src={logo} alt="logo" />
        </footer>
      </div>
    )
  }
}
