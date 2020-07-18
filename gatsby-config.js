module.exports = {
  siteMetadata: {
    title: `Perfect Blend`,
    author: {
      name: `Hao Tien Pan`,
      summary: `Freshy new developer`,
    },
    description: `Coffee blend explore for those that want to branch out.`,
    // siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    // social: {
    //   twitter: `kylemathews`,
    // },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-sass`,
          `gatsby-transformer-sharp`, 
          `gatsby-plugin-sharp`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/assets/images/home-bg`, // wherever background images are stored
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    'gatsby-plugin-netlify-cms',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: 'rootroot',
          database: 'CapstonePerfectBlend'
        },
        queries: [
          {
            statement: 'SELECT * FROM perfectblendlearnsection',
            idFieldName: 'id',
            name: 'perfectblendlearnsection'
          },
          // {
          //   statement: 'SELECT * FROM testimportcoffee',
          //   idFieldName: 'id',
          //   name: 'testimportcoffee'

          // }
        ]
      }
    },

  ],
}
