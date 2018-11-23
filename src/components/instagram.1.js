import React, { Component } from 'react';
import style from './instagram.module.css'

const InstaImage = (props) => {
  const { src, position, link } = props;
  const style = {
    backgroundImage: 'url(' + src + ')',
    width: '100%',
    height: "auto",
    backgroundSize: 'cover',
    backgroundPosition: position ? position : 'center bottom'
  }

  return (
    <a href={link} className="instaImg" style={style} target="_blank" >
      <div />
    </a>
  )
}

class Instagram1 extends Component {
  constructor() {
    super()
    this.state = {images: null, width: null}

    this.fetchInstagram = this.fetchInstagram.bind(this)
  }

  componentWillMount() {
    this.fetchInstagram()

  }
  componentDidMount() {

  }

  
  test(src) {
    return (
      <div className="instaImg">
        <img src={src} alt="instagram" style={{width: '100%', height: 'auto', overflow: 'hidden' }} />
      </div>
    )
  }
  

  fetchInstagram() {
    const images = [
      {
        img: "https://scontent-lhr3-1.cdninstagram.com/vp/9006d4b05c837704232ebc19c26991c8/5C569888/t51.2885-15/e35/c143.0.794.794/s240x240/42666704_334354057349724_7434793390872388076_n.jpg",
        link: "https://www.instagram.com/p/Bo1FFmtB1WT/?taken-by=onedayaway_blog",
      },
      {
        img: "https://scontent-lht6-1.cdninstagram.com/vp/d4b627ed5564c7e9ec618eda678e7d36/5BF01FBD/t51.2885-15/sh0.08/e35/c181.0.718.718/s640x640/36701774_211273352904828_7977818077767139328_n.jpg",
        link: "https://www.instagram.com/p/BlnVt3VhQnX/?taken-by=onedayaway_blog",
      },
      {
        img: "https://scontent-lht6-1.cdninstagram.com/vp/318be401d1f6006d3e9a57638d2ee334/5BEE2896/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/33062138_2077426909248424_9056774129503436800_n.jpg",
        link: "https://www.instagram.com/p/BjVkznNhfva/?taken-by=onedayaway_blog",
      },
      {
        img: "https://scontent-lht6-1.cdninstagram.com/vp/44a22187749f08555851c6976850ef6d/5BF3BA42/t51.2885-15/sh0.08/e35/c168.0.743.743/s640x640/28429249_974747882687173_4405608385144160256_n.jpg",
        link: "https://www.instagram.com/p/BfksfdjAiE8/?taken-by=onedayaway_blog",
      },
      {
        img: "https://scontent-lht6-1.cdninstagram.com/vp/8975be3e797402b25e446e221179f27e/5BF50B63/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/27578429_542713359433842_7863480997466079232_n.jpg",
        link: "https://www.instagram.com/p/BeoQ0dtAYKt/?taken-by=onedayaway_blog",
      },
      {
        img: "https://scontent-lht6-1.cdninstagram.com/vp/92b6ce78ea31ee0d02e3892bad9a30a3/5C06C161/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/26863534_147839302677734_3026409285916557312_n.jpg",
        link: "https://www.instagram.com/p/BegBNQpACq3/?taken-by=onedayaway_blog",
      },
      {
        img: "https://scontent-lht6-1.cdninstagram.com/vp/a488f32e57ea5ab6804b26b52aad9bd9/5C03197C/t51.2885-15/sh0.08/e35/c134.0.811.811/s640x640/22710970_185717858666342_1244315818800447488_n.jpg",
        link: "https://www.instagram.com/p/Batoi9VAiGD/?taken-by=onedayaway_blog",
      },
      {
        img: "https://scontent-lht6-1.cdninstagram.com/vp/3d186ec4b2e2e247260ffe0a16687083/5BFFD3B5/t51.2885-15/sh0.08/e35/c146.0.787.787/s640x640/21819574_304360403305979_2452910016642940928_n.jpg",
        link: "https://www.instagram.com/p/BZKA1wNAHge/?taken-by=onedayaway_blog",
      },
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
    return (
      <div
        className={style.insta}
        ref={ref => this.insta = ref}
      >
        {images ? images.map(({ img, link }) => <InstaImage key={link} src={img} link={link} position={this.props.position} />) : <b>nothing</b>}
      </div>
    )
  }
}

export default Instagram1;
