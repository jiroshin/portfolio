module.exports = {
  siteMetadata: {
    title: `jiroshin's portfolio`,
    description: `jiroshin's portfolio`,
    author: `jiroshin`,
    social: {
      twitter: '@jiroshin_',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true, 
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/contents/posts`, //eslint-disable-line
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jiroshin's portfolio'`,
        short_name: `jiroshin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `static/config-images/icon-transparent.jpg`,
      },
    },
  ],
}
