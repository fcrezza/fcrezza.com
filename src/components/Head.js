import React from 'react'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

function Head({title, description, meta = []}) {
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

	const metaTitle = title || site.siteMetadata.title
	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{
				lang: 'en'
			}}
			title={metaTitle}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: metaTitle
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
					content: metaTitle
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

export default Head
