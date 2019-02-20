import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import PostHeroImage from './HeroImage'

const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      autoplay
      autoplayInterval={5000}
      wrapAround
      withoutControls
      speed={800}
    >
      {images.map(image => {
        return (
          <PostHeroImage
            key={image.src}
            fluid={image}
            height={60}
            position={image.position}
          />
        )
      })}
    </Carousel>
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      position: PropTypes.string,
    })
  ),
}

export default ImageCarousel
