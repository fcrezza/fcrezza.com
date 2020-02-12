import React from 'react'
import {createGlobalStyle} from 'styled-components'
import Nav from './Nav'
import Showcase from './Showcase'
import Work from './Work'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import 'typeface-source-sans-pro'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`

const Layout = () => (
    <>
      <Global />
      <Nav />
      <Showcase />
      <Work />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
)

export default Layout
