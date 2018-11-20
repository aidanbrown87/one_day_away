import React, { Component } from 'react'

class PostHeroImage extends Component {
  render() {
    const { fileName, height, right, position, image } = this.props

    const style = {
      backgroundImage: `url(${image})`,
      width: '100%',
      height: height ? height + 'vh' : '50vh',
      backgroundSize: 'cover',
      marginLeft: right ? 'auto' : '0',
      backgroundPosition: position ? position : 'center bottom',
    }

    return <div style={style} />
  }
}

export default PostHeroImage
