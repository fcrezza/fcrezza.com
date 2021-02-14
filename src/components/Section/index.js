import React from 'react'

import styles from './section.module.css'

function Section({title, children}) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <div className={styles.sectionTitleBox}>
          <h2 className={styles.sectionTitleText}>{title}</h2>
        </div>
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  )
}

export default Section
