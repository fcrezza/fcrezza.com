import React from 'react'
import SEO from '../components/seo'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import {ThemeProvider} from '../utils/ThemeContext'

const IndexPage = () => (
  <>
    <SEO title="Portfolio Site" />
    <Layout>
      <ThemeProvider>
        <Nav />
        <Showcase />
      </ThemeProvider>
    </Layout>
  </>
)

export default IndexPage
