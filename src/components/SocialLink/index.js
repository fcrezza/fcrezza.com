import React from 'react'

import styles from './sociallink.module.css'

function SocialLink({children, href}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialLink}
    >
      {children}
    </a>
  )
}

export default SocialLink
