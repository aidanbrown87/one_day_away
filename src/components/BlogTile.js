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
  }

  toggleOpacity = () => {
    this.setState({ opacity: this.state.opacity === 1 ? null : 1 })
  }

  render() {
    const style = { width: this.props.columnWidth }
    const { thumb, title, date, slug } = this.props
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
            Continue reading
          </Link>
        </div>
      </div>
    )
  }
}
