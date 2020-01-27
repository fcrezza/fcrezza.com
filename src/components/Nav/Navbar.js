import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Logo from './Logo'
import Link from './Link'
import ThemeToggle from './ThemeToggle'
import {SmallDevider} from '../Devider'
import {getThemeValue} from '../../utils/ThemeContext'
import toRem from '../../utils/toRem'
import color from '../../utils/colorSchemes'
import mobile from '../../utils/mobile'
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
    isScrolled ? `${toRem(8)} ${toRem(80)}` : `${toRem(20)} ${toRem(80)} 0`};
  transition: all 0.4s ease;
  ${mobile({display: 'none'})}
`

const Left = styled.div`
  display: flex;
  align-items: center;
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
  return (
    <Wrapper theme={theme} isScrolled={isScrolled}>
      <StyledNavbar>
        <Left>
          <Logo />
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="navlink"
            to="#home"
          >
            Home
          </Link>
          <SmallDevider />
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="navlink"
            to="#skills"
          >
            About
          </Link>
          <SmallDevider />
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="navlink"
            to="#portfolio"
          >
            Portfolio
          </Link>
          <SmallDevider />
          <Link
            color={color.common.smoothWhite}
            activeColor={color.common.white}
            as="navlink"
            to="#contact"
          >
            Contact
          </Link>
        </Left>
        <Right>
          <Link as="sociallink" to="https://github.com/fcrezza/portfolio-site">
            <img src={github} alt="github" />
          </Link>
          <Link as="sociallink" to="https://twitter.com/fcrezza">
            <img src={twitter} alt="github" />
          </Link>
          <ThemeToggle />
        </Right>
      </StyledNavbar>
    </Wrapper>
  )
}

export default Navbar

Navbar.propTypes = {
  isScrolled: PropTypes.number.isRequired,
}
