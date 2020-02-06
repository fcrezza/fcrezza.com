import React from 'react'
import {config} from '@fortawesome/fontawesome-svg-core'
import SEO from '../components/seo'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import Work from '../components/Work'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {ThemeProvider} from '../utils/ThemeContext'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent fontawesome from dynamically adding its css
config.autoAddCss = false

const IndexPage = () => (
  <>
    <SEO title="Portfolio Site" />
    <Layout>
      <ThemeProvider>
        <Nav />
        <Showcase />
        <Work />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeProvider>
    </Layout>
  </>
)

export default IndexPage
