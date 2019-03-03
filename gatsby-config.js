module.exports = {
  siteMetadata: {
    title: 'One Day Away',
    author: 'Aidan Brown and Judith Brown',
    description: 'Documenting our travels, one day at a time',
    siteUrl: 'https://onedayaway.co.uk',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components`,
        name: 'components',
      },
    },
    // {
    //   resolve: `gatsby-plugin-cookiehub`,
    //   options: {
    //     // your cookiehub widget ID
    //     cookihubId: `9f7c121b`,
    //     // your google analytics tracking id
    //     trackingId: `UA-124182766-1`,
    //     // Puts tracking script in the head instead of the body
    //     head: false,
    //     // enable ip anonymization
    //     anonymize: true,        
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-124182766-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `One Day Away`,
        short_name: `O.D.A`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `green`,
        display: `minimal-ui`,
        icon: `src/components/planeIcon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
