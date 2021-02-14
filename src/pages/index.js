import React from 'react'

import Head from '../components/Head'
import ButtonMode from '../components/ButtonMode'
import Section from '../components/Section'
import SocialLink from '../components/SocialLink'

import styles from './index.module.css'

function Landing() {
  return (
    <div className={styles.container}>
      <Head />
      <div className={styles.buttonModeContainer}>
        <ButtonMode>toggler</ButtonMode>
      </div>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Anang Fachreza</h1>
        <p className={styles.headerDescription}>Software Engineer</p>
      </div>
      <Section title="Tentang Saya">
        <p className={styles.aboutText}>
          Halo! saya Anang Fachreza seorang software engineer, Tugas utama saya
          adalah membangun aplikasi dan memastikan aplikasi yang dibuat cepat,
          mudah digunakan serta dapat diakses oleh user nantinya. Saya tertarik
          dengan web Programming dan mobile programming Disamping itu saya suka
          mengeksplor teknologi terbaru.
        </p>
      </Section>
      <Section title="Portofolio">
        <p className={styles.comingSoonText}>Coming soon...</p>
      </Section>
      <Section title="Media Sosial">
        <p className={styles.socialMediaText}>
          Terhubung dengan saya melalui platform berikut:
        </p>
        <ul className={styles.socialMediaGroup}>
          <li className={styles.socialMediaItem}>
            <SocialLink href="mailto:fachrezanang@gmail.com">
              Email (fachrezanang@gmail.com)
            </SocialLink>
          </li>
          <li className={styles.socialMediaItem}>
            <SocialLink href="https://www.linkedin.com/in/fcrezza">
              LinkedIn (https://www.linkedin.com/in/fcrezza)
            </SocialLink>
          </li>
          <li className={styles.socialMediaItem}>
            <SocialLink href="https://twitter.com/fcrezza">
              Twitter (https://twitter.com/fcrezza)
            </SocialLink>
          </li>
          <li className={styles.socialMediaItem}>
            <SocialLink href="https://github.com/fcrezza">
              Github (https://github.com/fcrezza)
            </SocialLink>
          </li>
          <li className={styles.socialMediaItem}>
            <SocialLink href="https://codewars.com/users/fcrezza">
              Codewars (https://codewars.com/users/fcrezza)
            </SocialLink>
          </li>
        </ul>
      </Section>
    </div>
  )
}

export default Landing
