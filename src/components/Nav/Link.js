import styled from 'styled-components'
import toRem from '../../utils/toRem'

const Link = styled.a`
  text-decoration: none;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
  
  &:focus,
  &:hover {
    outline: none;
  }
`

export const SocialLink = styled(Link).attrs({
  target: '_blank',
})`
  &:not(:last-child) {
   margin-right: ${toRem(26)}; 
  }
`
export default Link