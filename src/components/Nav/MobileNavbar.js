import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Link from './Link'
import {getThemeValue} from '../../utils/ThemeContext'
import mobile from '../../utils/mobile'
import color from '../../utils/colorSchemes'
import toRem from '../../utils/toRem'
import github from '../../images/github.svg'
import twitter from '../../images/twitter.svg'

const Wrapper = styled.div`
  background: ${({isScrolled, theme}) => {
    if (isScrolled && theme === 'light') {
      return color.light.blue
    } else if (isScrolled && theme === 'dark') {
      return color.dark.darkBlue
    } else {
      return 'transparent'
    }
  }};
  padding: ${({isScrolled}) =>
    isScrolled ? `0 ${toRem(50)} 0` : `${toRem(20)} ${toRem(50)} 0`};
  transition: all 0.4s ease;
  position: absolute;
  width: 100%;
  z-index: 2;
  display: none;
  ${mobile({display: 'block'})}
`

const StyledMobileNavbar = styled.div`
  height: ${toRem(65)};
  justify-content: space-between;
  display: flex;
  align-items: center;
  align-items: 'center';
`

const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: ${toRem(35)};
    height: ${toRem(4.5)};
    background: ${color.common.smoothWhite};
    border-radius: 5px;
  }
`

const Navigation = styled.nav`
  position: absolute;
  top: ${({isScrolled}) => (isScrolled ? toRem(65) : toRem(85))};
  left: ${toRem(50)};
  right: ${toRem(50)};
  height: ${({open}) => (open ? toRem(240) : 0)};
  flex-direction: column;
  transition: all 0.4s ease;
  overflow: hidden;
  display: none;
  background: ${({theme}) =>
    theme === 'light' ? color.common.smoothWhite : color.dark.darkGrey};
  ${mobile({display: 'flex'})}

  div {
    padding: ${toRem(15)} 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MobileNavbar = ({isScrolled}) => {
  const [open, setOpen] = useState(true)
  const theme = getThemeValue()

  return (
    <>
      <Wrapper theme={theme} isScrolled={isScrolled}>
        <StyledMobileNavbar isScrolled={isScrolled}>
          <Logo />
          <Burger onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </Burger>
        </StyledMobileNavbar>
      </Wrapper>
      <Navigation theme={theme} open={open} isScrolled={isScrolled}>
        <Link
          as="navlink"
          color={
            theme === 'light' ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={theme === 'light' ? color.light.dark : color.dark.white}
          backgroundActive={
            theme === 'light' ? color.light.grey : color.dark.dark
          }
          block
          active
          to="#home"
        >
          Home
        </Link>
        <Link
          as="navlink"
          color={
            theme === 'light' ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={theme === 'light' ? color.light.dark : color.dark.white}
          backgroundActive={
            theme === 'light' ? color.light.grey : color.dark.dark
          }
          block
          active
          to="#about"
        >
          About
        </Link>
        <Link
          as="navlink"
          color={
            theme === 'light' ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={theme === 'light' ? color.light.dark : color.dark.white}
          backgroundActive={
            theme === 'light' ? color.light.grey : color.dark.dark
          }
          block
          to="#portfolio"
        >
          Portfolio
        </Link>
        <Link
          as="navlink"
          color={
            theme === 'light' ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={theme === 'light' ? color.light.dark : color.dark.white}
          backgroundActive={
            theme === 'light' ? color.light.grey : color.dark.dark
          }
          block
          to="#contact"
        >
          Contact
        </Link>
        <div>
          <Link as="sociallink" to="https://github.com/fcrezza/portfolio-site">
            <img src={github} alt="github" />
          </Link>
          <Link as="sociallink" to="https://twitter.com/fcrezza">
            <img src={twitter} alt="github" />
          </Link>
          <ThemeToggle />
        </div>
      </Navigation>
    </>
  )
}

export default MobileNavbar

MobileNavbar.propTypes = {
  isScrolled: PropTypes.number.isRequired,
}
