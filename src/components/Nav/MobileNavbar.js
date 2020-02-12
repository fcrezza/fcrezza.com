import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo'
import {SocialLink} from './Link'
import {NavButtonBlock} from './NavButton'
import {mobile, phone} from '../../utils/mediaQuery'
import colors from '../../utils/colorSchemes'
import toRem from '../../utils/toRem'
import hexToRGB from '../../utils/hexToRGB'
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
    isScrolled ? `0 ${toRem(50)} 0` : `${toRem(20)} ${toRem(50)} 0`};
  position: absolute;
  width: 100%;
  z-index: 2;
  display: none;
  ${mobile({display: 'block'})}
  ${phone({
    padding: ({isScrolled}) =>
      isScrolled ? `0 ${toRem(30)} 0` : `${toRem(20)} ${toRem(30)} 0`,
  })}
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
    background: ${colors.smoothWhite};
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
  overflow-y: auto;
  display: none;
  background: ${colors.smoothWhite};
  box-shadow: 0 0 ${toRem(30)} rgba(${hexToRGB(colors.black)},0.5);
  ${mobile({display: 'flex'})}
  ${phone({left: 30, right: 30})}

  div {
    padding: ${toRem(15)} 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MobileNavbar = ({isScrolled}) => {
  const [open, setOpen] = useState(false)
  const active = useClickToScroll('.nav-btn')  

  return (
    <>
      <Wrapper isScrolled={isScrolled}>
        <StyledMobileNavbar>
          <Logo />
          <Burger onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </Burger>
        </StyledMobileNavbar>
      </Wrapper>
      <Navigation open={open} isScrolled={isScrolled}>
        <NavButtonBlock
          onClick={() => setOpen(!open)}
          active={active === "home"}
          data-name="home"
          className="nav-btn"
        >
          Home
        </NavButtonBlock>
        <NavButtonBlock
        onClick={() => setOpen(!open)}
          active={active === "about"}
          data-name="about"
          className="nav-btn"
        >
          About
        </NavButtonBlock>
        <NavButtonBlock
        onClick={() => setOpen(!open)}
          active={active === "portfolio"}
          data-name="portfolio"
          className="nav-btn"
        >
          Portfolio
        </NavButtonBlock>
        <NavButtonBlock
        onClick={() => setOpen(!open)}
          active={active === "contact"}
          data-name="contact"
          className="nav-btn"
        >
          Contact
        </NavButtonBlock>
        <div>
          <SocialLink
            href="https://github.com/fcrezza/portfolio-site"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              color={colors.purple}
            />
          </SocialLink>
          <SocialLink href="https://twitter.com/fcrezza">
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color={colors.purple}
            />
          </SocialLink>
        </div>
      </Navigation>
    </>
  )
}

export default MobileNavbar

MobileNavbar.propTypes = {
  isScrolled: PropTypes.number.isRequired,
}
