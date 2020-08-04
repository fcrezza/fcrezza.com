module.exports = {
	siteMetadata: {
		title: `Anang Fachreza Personal Site`,
		description: `A frontend web developer - who build UX rich, accessible & performant website `,
		author: `Anang Fachreza`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `fcrezza.com`,
				short_name: `fcrezza.com`,
				start_url: `/`,
				background_color: `#574B90`,
				theme_color: `#574B90`,
				display: `minimal-ui`,
				icon: `src/images/me.jpg`
			}
		}
	]
}
