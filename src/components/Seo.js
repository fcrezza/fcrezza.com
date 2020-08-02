import React from 'react'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

function Seo({description, meta, title}) {
	const {site} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			title={title}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					property: `og:url`,
					content: `https://psite.netlify.com/`
				},
				{
					property: `og:image`,
					content: `https://raw.githubusercontent.com/fcrezza/portfolio-site/master/src/images/screenshot.png`
				},
				{
					name: `twitter:card`,
					content: `summary`
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: metaDescription
				},
				{
					property: `twitter:url`,
					content: `https://psite.netlify.com/`
				},
				{
					property: `twitter:image`,
					content: `https://raw.githubusercontent.com/fcrezza/portfolio-site/master/src/images/screenshot.png`
				}
			].concat(meta)}
		/>
	)
}

export default Seo
