import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import useScroll from '../../utils/useScroll'

const StyledNav = styled.div`
  position: ${({yOffset}) => (yOffset > 470 ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: 100%;
  transition: position 0.3s ease;
`
const Nav = () => {
  const yOffset = useScroll()
  return (
    <StyledNav yOffset={yOffset}>
      <Navbar yOffset={yOffset} />
      <MobileNavbar yOffset={yOffset} />
    </StyledNav>
  )
}

export default Nav
