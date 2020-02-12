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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Site`,
        short_name: `Portfolio Site`,
        start_url: `/`,
        background_color: `#574B90`,
        theme_color: `#574B90`,
        display: `minimal-ui`,
        icon: `src/images/fav.svg`,
      },
    },
  ],
}
