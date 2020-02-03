import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo'
import Link from './Link'
import {getThemeValue, getThemeUpdater} from '../../utils/ThemeContext'
import mobile from '../../utils/mobile'
import color from '../../utils/colorSchemes'
import toRem from '../../utils/toRem'
import isLight from '../../utils/isLight'
import useClickToScroll from '../../utils/useClickToScroll'

const Wrapper = styled.div`
  background: ${({isScrolled, theme}) => {
    if (isScrolled && isLight(theme)) {
      return color.light.blue
    } else if (isScrolled && !isLight(theme)) {
      return color.dark.darkBlue
    } else {
      return 'transparent'
    }
  }};
  padding: ${({isScrolled}) =>
    isScrolled ? `0 ${toRem(50)} 0` : `${toRem(20)} ${toRem(50)} 0`};
  transition: background 0.3s ease;
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
  transition: height 0.3s ease;
  flex-direction: column;
  overflow: hidden;
  display: none;
  background: ${({theme}) =>
    isLight(theme) ? color.common.smoothWhite : color.dark.darkGrey};
  ${mobile({display: 'flex'})}

  div {
    padding: ${toRem(15)} 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MobileNavbar = ({isScrolled}) => {
  const [open, setOpen] = useState(false)
  const theme = getThemeValue()
  const changeTheme = getThemeUpdater()
  const active = useClickToScroll()

  return (
    <>
      <Wrapper theme={theme} isScrolled={isScrolled}>
        <StyledMobileNavbar>
          <Logo />
          <Burger onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </Burger>
        </StyledMobileNavbar>
      </Wrapper>
      <Navigation theme={theme} open={open} isScrolled={isScrolled}>
        {/* eslint-disable-next-line */}
        <Link
          as="button"
          type="navlink"
          color={
            isLight(theme) ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={isLight(theme) ? color.light.dark : color.dark.white}
          backgroundActive={isLight(theme) ? color.light.grey : color.dark.dark}
          block
          active={active === 'home'}
          data-name="home"
          className="navlink"
        >
          Home
        </Link>
        {/* eslint-disable-next-line */}
        <Link
          as="button"
          type="navlink"
          color={
            isLight(theme) ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={isLight(theme) ? color.light.dark : color.dark.white}
          backgroundActive={isLight(theme) ? color.light.grey : color.dark.dark}
          block
          active={active === 'about'}
          data-name="about"
          className="navlink"
        >
          About
        </Link>
        {/* eslint-disable-next-line */}
        <Link
          as="button"
          type="navlink"
          color={
            isLight(theme) ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={isLight(theme) ? color.light.dark : color.dark.white}
          backgroundActive={isLight(theme) ? color.light.grey : color.dark.dark}
          block
          active={active === 'portfolio'}
          data-name="portfolio"
          className="navlink"
        >
          Portfolio
        </Link>
        {/* eslint-disable-next-line */}
        <Link
          as="button"
          type="navlink"
          color={
            isLight(theme) ? color.light.smoothDark : color.dark.smoothWhite
          }
          activeColor={isLight(theme) ? color.light.dark : color.dark.white}
          backgroundActive={isLight(theme) ? color.light.grey : color.dark.dark}
          block
          active={active === 'contact'}
          data-name="contact"
          className="navlink"
        >
          Contact
        </Link>
        <div>
          <Link
            type="sociallink"
            to="https://github.com/fcrezza/portfolio-site"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              color={isLight(theme) ? color.dark.darkBlue : color.light.blue}
            />
          </Link>
          <Link type="sociallink" to="https://twitter.com/fcrezza">
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color={isLight(theme) ? color.dark.darkBlue : color.light.blue}
            />
          </Link>
          {/* eslint-disable-next-line */}
          <Link as="button" onClick={changeTheme}>
            <FontAwesomeIcon
              icon={isLight(theme) ? faMoon : faSun}
              size="lg"
              color={isLight(theme) ? color.dark.darkBlue : color.light.blue}
            />
          </Link>
        </div>
      </Navigation>
    </>
  )
}

export default MobileNavbar

MobileNavbar.propTypes = {
  isScrolled: PropTypes.number.isRequired,
}
