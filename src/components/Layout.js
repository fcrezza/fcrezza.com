import React, {useState} from 'react'
import {createGlobalStyle, css} from 'styled-components'
import Nav from './Nav'
import Showcase from './Showcase'
import Work from './Work'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import Modal from './Modal'
import {ThemeProvider} from '../utils/ThemeContext'
import 'typeface-cuprum'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Cuprum', sans-serif;

    ${({open}) =>
      open &&
      css`
        overflow: hidden;
      `}
  }
`
const Layout = () => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('')

  const toggleModal = () => {
    setOpen(prevState => !prevState)
  }

  const handleSetType = text => {
    setType(text)
  }

  return (
    <>
      <Global open={open} />
      <ThemeProvider>
        <Nav />
        <Showcase />
        <Work />
        <About />
        <Portfolio />
        <Contact handleSetType={handleSetType} toggleModal={toggleModal} />
        <Footer />
        {open && <Modal type={type} toggleModal={toggleModal} />}
      </ThemeProvider>
    </>
  )
}

export default Layout
