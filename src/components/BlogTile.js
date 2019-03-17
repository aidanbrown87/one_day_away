import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import tileStyle from './blogTile.module.css'

export default class BlogTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: null,
    }

    this.toggleOpacity = this.toggleOpacity.bind(this)
  }

  toggleOpacity() {
    this.setState({ opacity: this.state.opacity === 1 ? null : 1 })
  }

  render() {
    const { thumb, title, date, slug, columnWidth } = this.props
    const style = { width: columnWidth }

    return (
      <div className={tileStyle.blogTile}>
        <Img
          className={tileStyle.blogTileThumb}
          style={style}
          fluid={thumb.childImageSharp.fluid}
          alt={slug}
        />
        <div
          className={tileStyle.blogTileOverlay}
          style={this.state}
          onClick={this.toggleOpacity}
        >
          <div className={tileStyle.blogTileTitle}>{title}</div>
          <div className={tileStyle.blogTileDate}>{date}</div>
          <Link to={slug} className="button element">
            Read more
          </Link>
        </div>
      </div>
    )
  }
}
