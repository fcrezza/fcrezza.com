import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {GrGatsbyjs} from 'react-icons/gr'
import {
	DiSublime,
	DiChrome,
	DiJavascript1,
	DiMysql,
	DiNodejsSmall,
	DiMozilla,
	DiReact,
	DiUbuntu,
	DiGit,
	DiTerminal,
	DiGithubBadge
} from 'react-icons/di'

import styles from './skills.module.css'

function Skills() {
	return (
		<div className={styles.container}>
			<div className={styles.headingWrapper}>
				<h2 className={styles.title}>
					<span>Skills</span>
				</h2>
				<p className={styles.description}>
					Dalam mengembangkan web saya menggunakan berbagai bahasa pemrograman,
					tools, library/frameworks untuk memudahkan saya dalam membuat website
					yang cantik tanpa melupakan aspek aksesibilitas website tersebut
				</p>
			</div>
			<div className={styles.skillsContainer}>
				<SkillWrapper>
					<h3 className={styles.skillTitle}>Languages</h3>
					<SkillItem Icon={AiFillHtml5} text="HTML" />
					<SkillItem Icon={FaCss3Alt} text="CSS" />
					<SkillItem Icon={DiJavascript1} text="Javascript" />
					<SkillItem Icon={DiMysql} text="MySQL" />
				</SkillWrapper>
				<SkillWrapper>
					<h3 className={styles.skillTitle}>Frameworks/library</h3>
					<SkillItem Icon={DiNodejsSmall} text="Node.js" />
					<SkillItem Icon={DiNodejsSmall} text="Expressjs" />
					<SkillItem Icon={DiReact} text="React.js" />
					<SkillItem Icon={DiReact} text="Next.js" />
					<SkillItem Icon={GrGatsbyjs} text="Gatsby.js" />
				</SkillWrapper>
				<SkillWrapper>
					<h3 className={styles.skillTitle}>Support Tools</h3>
					<SkillItem Icon={DiUbuntu} text="Ubuntu" />
					<SkillItem Icon={DiGit} text="Git" />
					<SkillItem Icon={DiGithubBadge} text="Github" />
					<SkillItem Icon={DiTerminal} text="Terminal" />
					<SkillItem Icon={DiSublime} text="Sublime Text" />
					<SkillItem Icon={DiChrome} text="Google Chrome" />
					<SkillItem Icon={DiMozilla} text="Mozilla Firefox" />
				</SkillWrapper>
			</div>
		</div>
	)
}

function SkillWrapper({children}) {
	return <div className={styles.skillWrapper}>{children}</div>
}

function SkillItem({Icon, text}) {
	return (
		<div className={styles.skillItem}>
			<Icon className={styles.skillIcon} />
			<p className={styles.skillText}>{text}</p>
		</div>
	)
}

export default Skills
