import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import toRem from '../../utils/toRem'

const StyledLink = styled.a`
  text-decoration: none;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  font-family: 'Cuprum', sans-serif;
  
  &:focus,
  &:hover {
    outline: none;
  }
`

const NavLink = styled(StyledLink)`
  color: ${({active, activeColor, color}) => (active ? activeColor : color)};
  font-weight: 400;
  font-size: ${toRem(23)};
  margin-right: ${toRem(16)};
  transition: all 0.3s ease;
  background: ${({active, backgroundActive}) => active && backgroundActive};

  ${({activeColor, block, backgroundActive}) =>
    block &&
    css`
      margin-right: 0;
      display: block;
      text-align: center;
      padding: ${toRem(10)};

      &:hover,
      &:focus {
        background: ${backgroundActive};
        color: ${activeColor};
      }
    `};

  ${({active, activeColor}) =>
    !active &&
    css`
      &:hover,
      &:focus {
        color: ${activeColor};
      }
    `};
`

const SocialLink = styled(StyledLink).attrs({
  target: '_blank',
})`
  margin-right: ${toRem(26)};
  display: inline-block;
`

const Link = ({type, active, children, to, ...rest}) => {
  let LinkType
  if (type === 'navlink') {
    LinkType = NavLink
  } else if (type === 'sociallink') {
    LinkType = SocialLink
  } else {
    LinkType = StyledLink
  }
  return (
    <LinkType active={active} href={to} {...rest}>
      {children}
    </LinkType>
  )
}

export default Link

Link.propTypes = {
  type: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
}
