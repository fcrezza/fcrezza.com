import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import toRem from '../../utils/toRem'

const StyledLink = styled.a`
  text-decoration: none;
`

const NavLink = styled(StyledLink)`
  color: ${({active, activeColor, color}) => (active ? activeColor : color)};
  font-weight: ${({active}) => (active ? 600 : 400)};
  font-size: ${toRem(21)};
  margin-right: ${toRem(12)};
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
        outline: none;
        background: ${backgroundActive};
        color: ${activeColor};
      }
    `};

  ${({active, activeColor}) =>
    !active &&
    css`
      &:hover,
      &:focus {
        outline: none;
        color: ${activeColor};
      }
    `};
`

const SocialLink = styled(StyledLink).attrs({
  target: '_blank',
})`
  margin-right: ${toRem(26)};
  display: inline-block;
  transition: transform 0.3s ease;

  img {
    display: block;
    width: ${toRem(25)};
    height: ${toRem(25)};
  }
`

const Link = ({as, active, children, to, ...rest}) => {
  let LinkType
  if (as === 'navlink') {
    LinkType = NavLink
  } else if (as === 'sociallink') {
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
  as: PropTypes.string,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}
