import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography({
  googleFonts: [{
    name: 'Playfair Display',
    styles: ['700']
  }, {
    name: 'Open Sans',
    styles: ['400', '700', '900']
  }],
  headerFontFamily: ['Playfair Display', 'Georgia', 'serif'],
  bodyFontFamily: ['Open Sans', 'Georgia', 'serif'],
  baseFontSize: '14px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  overrideStyles: ({ rhythm }, options) => ({
    'h2': {
      marginBottom: 0,
      marginTop: rhythm(2),
      textAlign: 'center',
    },
    'h3': {
      marginBottom: rhythm(1),
      marginTop: rhythm(2),
      textAlign: 'center',
    },
    'a': {
      // boxShadow: '0 2px 0 0 green',
      borderBottom: '2px solid green',
      transition: 'all 0.2s ease-in-out',
      color: 'hsla(0,0%,0%,0.8)',
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      borderBottom: 'none',
      backgroundColor: 'rgba(0, 126, 0, 0.2)',
    },
    'thead': {
      display: 'none'
    },
    'th, td': {
      borderBottom: 'none',
      paddingLeft: '0.25em',
      paddingRight: '0.25em',
      paddingTop: 0,
      paddingBottom: 0,
    },
    'footer': {
      display: 'flex !important',
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
