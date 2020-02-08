import React from 'react'
import {config} from '@fortawesome/fontawesome-svg-core'
import SEO from '../components/seo'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../components/Layout'

// Prevent fontawesome from dynamically adding its css
config.autoAddCss = false

const IndexPage = () => (
  <>
    <SEO title="Portfolio Site" />
    <Layout />
  </>
)

export default IndexPage
