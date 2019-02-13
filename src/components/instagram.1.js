import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
 
import style from './instagram.module.css'

const InstaImage = (props) => {
  const { fluid, link } = props;
  const style = {
    width: '100%',
    height: "100%",
    borderBottom: 'none',
  }

  return (
    <a href={link} className="instaImg" style={style} target="_blank" >
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
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;'
  }
  & > picture > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;'
  }
`

class Instagram1 extends Component {
  constructor() {
    super()
    this.state = {images: null, width: null}

    this.fetchInstagram = this.fetchInstagram.bind(this)
  }

  componentWillMount() {
    this.fetchInstagram()

  }

  fetchInstagram() {
    const images = [
      {
        img: 'i8',
        link: "https://www.instagram.com/p/BrxU1EaBRCV/",
      },
      {
        img: 'i7',
        link: "https://www.instagram.com/p/BrpW96ahih2/",
      },
      {
        img: 'i6',
        link: "https://www.instagram.com/p/BqCY8jgHahU/",
      },
      {
        img: 'i4',
        link: "https://www.instagram.com/p/Bo1FFmtB1WT/",
      },
      {
        img: 'i5',
        link: "https://www.instagram.com/p/BlnVt3VhQnX/",
      },
      {
        img: 'i3',
        link: "https://www.instagram.com/p/BjVkznNhfva/",
      },
      {
        img: 'i2',
        link: "https://www.instagram.com/p/BfksfdjAiE8/",
      },
      {
        img: 'i1',
        link: "https://www.instagram.com/p/BeoQ0dtAYKt/",
      },
      // {
      //   img: "https://scontent-lht6-1.cdninstagram.com/vp/3d186ec4b2e2e247260ffe0a16687083/5BFFD3B5/t51.2885-15/sh0.08/e35/c146.0.787.787/s640x640/21819574_304360403305979_2452910016642940928_n.jpg",
      //   link: "https://www.instagram.com/p/BZKA1wNAHge/?taken-by=onedayaway_blog",
      // },
      // {
      //   img: "https://scontent-lht6-1.cdninstagram.com/vp/468104c00d56afbfc9af2f8942505abe/5BFF7D4D/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/21149680_112391416139268_2723956696794791936_n.jpg",
      //   link: "https://www.instagram.com/p/BYUAJPBgR3w/?taken-by=onedayaway_blog",
      // },
      
      
      
      
      
      
    ]
    this.setState({images})
    // fetch("https://www.instagram.com/onedayaway_blog/?__a=1")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     // const images = data.graphql.user.edge_owner_to_timeline_media.edges.map(item => item.node.display_url).slice(0, 8)
    //     const images = [
    //       "https://scontent-lht6-1.cdninstagram.com/vp/d4b627ed5564c7e9ec618eda678e7d36/5BF01FBD/t51.2885-15/sh0.08/e35/c181.0.718.718/s640x640/36701774_211273352904828_7977818077767139328_n.jpg"
    //     ]
    //     console.log(images);
    //     this.setState({images})
    //   })
    //   .catch(error => console.log(error));
  }

  render () {
    const { images } = this.state
    const { data } = this.props
    return (
      <div
        className={style.insta}
        ref={ref => this.insta = ref}
      >
        {images ? images.map(({ img, link }) => <InstaImage key={link} fluid={data[img].childImageSharp.fluid} link={link} position={this.props.position} />) : <b>nothing</b>}
      </div>
    )
  }
}

// export default Instagram1;

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
      }
    `}
    render={data => <Instagram1 data={data} />}
  />
)

// export const query = graphql`
//   query {
//     i1: file(relativePath: { eq: "assets/insta/1.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     i2: file(relativePath: { eq: "assets/insta/2.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     i3: file(relativePath: { eq: "assets/insta/3.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     i4: file(relativePath: { eq: "assets/insta/4.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     i5: file(relativePath: { eq: "assets/insta/5.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     i6: file(relativePath: { eq: "assets/insta/6.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     i7: file(relativePath: { eq: "assets/insta/7.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     i8: file(relativePath: { eq: "assets/insta/8.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
