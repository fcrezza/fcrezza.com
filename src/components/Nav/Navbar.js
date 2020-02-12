import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo'
import {SocialLink} from './Link'
import {NavButton} from './NavButton'
import {SmallDevider} from '../Devider'
import toRem from '../../utils/toRem'
import colors from '../../utils/colorSchemes'
import {mobile} from '../../utils/mediaQuery'
import useClickToScroll from '../../utils/useClickToScroll'

const Wrapper = styled.div`
  background: ${({isScrolled}) => {
    if (isScrolled) {
      return colors.darkPurple
    } else {
      return 'transparent'
    }
  }};
  padding: ${({isScrolled}) =>
    isScrolled ? `${toRem(8)} ${toRem(90)}` : `${toRem(25)} ${toRem(90)} 0`};
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
  const active = useClickToScroll('.nav-btn')
  
  return (
    <Wrapper isScrolled={isScrolled}>
      <StyledNavbar>
        <Left>
          <Logo />
          <NavButton
            data-name="home"
            className="nav-btn"
            active={active === "home"}
          >
            Home
          </NavButton>
          <SmallDevider />
          <NavButton
            data-name="about"
            className="nav-btn"
            active={active === "about"}
          >
            About
          </NavButton>
          <SmallDevider />
          <NavButton
            data-name="portfolio"
            className="nav-btn"
            active={active === "portfolio"}
          >
            Portfolio
          </NavButton>
          <SmallDevider />
          <NavButton
            active={active === "contact"}
            className="nav-btn"
            data-name="contact"
          >
            Contact
          </NavButton>
        </Left>
        <Right>
          <SocialLink
            href="https://github.com/fcrezza/portfolio-site"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              color={colors.smoothWhite}
            />
          </SocialLink>
          <SocialLink href="https://twitter.com/fcrezza">
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color={colors.smoothWhite}
            />
          </SocialLink>
        </Right>
      </StyledNavbar>
    </Wrapper>
  )
}

export default Navbar

Navbar.propTypes = {
  isScrolled: PropTypes.number.isRequired,
}
