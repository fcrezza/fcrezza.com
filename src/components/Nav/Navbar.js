import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo'
import Link from './Link'
import {SmallDevider} from '../Devider'
import {getThemeValue, getThemeUpdater} from '../../utils/ThemeContext'
import toRem from '../../utils/toRem'
import color from '../../utils/colorSchemes'
import mobile from '../../utils/mobile'
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
    isScrolled ? `${toRem(8)} ${toRem(90)}` : `${toRem(25)} ${toRem(90)} 0`};
  transition: background 0.4s;
  ${mobile({display: 'none'})}
`

const Left = styled.div`
  display: flex;
  align-items: center;

  .logo {
    margin-right: ${toRem(45)};
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navbar = ({isScrolled}) => {
  const theme = getThemeValue()
  const changeTheme = getThemeUpdater()
  const active = useClickToScroll()

  return (
    <Wrapper theme={theme} isScrolled={isScrolled}>
      <StyledNavbar>
        <Left>
          <Logo />
          {/* eslint-disable-next-line */}
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="button"
            type="navlink"
            data-name="home"
            className="navlink"
            active={active === 'home'}
          >
            Home
          </Link>
          <SmallDevider />
          {/* eslint-disable-next-line */}
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="button"
            type="navlink"
            data-name="about"
            className="navlink"
            active={active === 'about'}
          >
            About
          </Link>
          <SmallDevider />
          {/* eslint-disable-next-line */}
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="button"
            type="navlink"
            data-name="portfolio"
            className="navlink"
            active={active === 'portfolio'}
          >
            Portfolio
          </Link>
          <SmallDevider />
          {/* eslint-disable-next-line */}
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="button"
            type="navlink"
            active={active === 'contact'}
            className="navlink"
            data-name="contact"
          >
            Contact
          </Link>
        </Left>
        <Right>
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
        </Right>
      </StyledNavbar>
    </Wrapper>
  )
}

export default Navbar

Navbar.propTypes = {
  isScrolled: PropTypes.number.isRequired,
}
