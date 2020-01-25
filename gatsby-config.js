module.exports = {
  siteMetadata: {
    welcome: `WELCOME!`,
    title: `Hai, I am Anang Fachreza`,
    subtitle: `Frontend Web Developer`,
    description: `Anang Fachreza portfolio site`,
    author: `Anang Fachreza`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Site`,
        short_name: `Portfolio Site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
