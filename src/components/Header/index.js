import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Button from '../../shared/Button'
import {GithubLink, TwitterLink, LinkedinLink, CodewarsLink} from '../Social'
import styles from './header.module.css'

function Header() {
	const {site} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						author
						description
					}
				}
			}
		`
	)

	return (
		<header className={styles.headerContainer}>
			<Button>Download my CV</Button>
			<div className={styles.headerContent}>
				<div className={styles.avatarContainer}>
					<div className={styles.avatarImg}></div>
				</div>
				<h1 className={styles.title}>
					<span className={styles.specialChar}>Hi! </span>
					{`I am ${site.siteMetadata.author}`}
				</h1>
				<p className={styles.description}>{site.siteMetadata.description}</p>
				<Button>Contact me</Button>
				<div className={styles.socialMedia}>
					<GithubLink />
					<TwitterLink />
					<LinkedinLink />
					<CodewarsLink />
				</div>
			</div>
			<button className={styles.bottomNavigation}>￬</button>
		</header>
	)
}

export default Header
