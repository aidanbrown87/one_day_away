import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import style from './instagram.module.css'

const InstaImage = props => {
  const { fluid, link } = props
  const style = {
    width: '100%',
    height: '100%',
    borderBottom: 'none',
  }

  return (
    <a href={link} className="instaImg" style={style} target="_blank">
      <StyledImg fluid={fluid} />
    </a>
  )
}

const StyledImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }
  & > picture > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }
`

class Instagram1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        {
          img: 'i12',
          link: 'https://www.instagram.com/p/BuaxTjIAzx9/',
        },
        {
          img: 'i11',
          link: 'https://www.instagram.com/p/BuGR-gvAOcz/',
        },
        {
          img: 'i10',
          link: 'https://www.instagram.com/p/Bt4OYQNBhOc/',
        },
        {
          img: 'i9',
          link: 'https://www.instagram.com/p/BtwU2OaBdZ9/',
        },
        {
          img: 'i8',
          link: 'https://www.instagram.com/p/BrxU1EaBRCV/',
        },
        {
          img: 'i7',
          link: 'https://www.instagram.com/p/BrpW96ahih2/',
        },
        {
          img: 'i6',
          link: 'https://www.instagram.com/p/BqCY8jgHahU/',
        },
        {
          img: 'i4',
          link: 'https://www.instagram.com/p/Bo1FFmtB1WT/',
        },
        {
          img: 'i5',
          link: 'https://www.instagram.com/p/BlnVt3VhQnX/',
        },
        {
          img: 'i3',
          link: 'https://www.instagram.com/p/BjVkznNhfva/',
        },
        {
          img: 'i2',
          link: 'https://www.instagram.com/p/BfksfdjAiE8/',
        },
        {
          img: 'i1',
          link: 'https://www.instagram.com/p/BeoQ0dtAYKt/',
        },
      ],
    }
  }

  render() {
    const { images } = this.state
    const { data } = this.props
    return (
      <div className={style.insta} ref={ref => (this.insta = ref)}>
        {images ? (
          images.slice(0, 8).map(({ img, link }) => (
            <InstaImage
              key={link}
              fluid={data[img].childImageSharp.fluid}
              link={link}
              position={this.props.position}
            />
          ))
        ) : (
          <b>nothing</b>
        )}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        i1: file(relativePath: { eq: "insta/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i2: file(relativePath: { eq: "insta/2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i3: file(relativePath: { eq: "insta/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i4: file(relativePath: { eq: "insta/4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i5: file(relativePath: { eq: "insta/5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i6: file(relativePath: { eq: "insta/6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i7: file(relativePath: { eq: "insta/7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i8: file(relativePath: { eq: "insta/8.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i9: file(relativePath: { eq: "insta/9.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i10: file(relativePath: { eq: "insta/10.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i11: file(relativePath: { eq: "insta/11.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i12: file(relativePath: { eq: "insta/12.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Instagram1 data={data} />}
  />
)
