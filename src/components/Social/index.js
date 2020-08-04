import React from 'react'

import {Github, Twitter, Linkedin, Codewars} from '../Icon'
import styles from './social.module.css'

function Link({href, children}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.link}
		>
			{children}
		</a>
	)
}

function GithubLink() {
	return (
		<Link href="https://github.com/fcrezza">
			<Github />
		</Link>
	)
}

function TwitterLink() {
	return (
		<Link href="https://twitter.com/fcrezza">
			<Twitter />
		</Link>
	)
}

function LinkedinLink() {
	return (
		<Link href="https://linkedin.com/in/fcrezza">
			<Linkedin />
		</Link>
	)
}

function CodewarsLink() {
	return (
		<Link href="https://codewars.com/users/fcrezza">
			<Codewars />
		</Link>
	)
}

export {GithubLink, TwitterLink, LinkedinLink, CodewarsLink}
