import styled from 'styled-components'
import toRem from '../utils/toRem'
import colors from '../utils/colorSchemes'
import {mobile, phone} from '../utils/mediaQuery'

const baseButton = styled.button`
  background: ${colors.pink};
  border: none;
  cursor: pointer;
  color: ${colors.white};
  font-weight: 700;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${toRem(23)};
  outline: none;

  &:hover,
  &:focus {
    background: ${colors.darkPink} 
  }
  ${mobile({fontSize:toRem(21)})}
  ${phone({fontSize:toRem(18)})}
`

export const InlineButton = styled(baseButton)`
  padding: ${toRem(13)};
`

export const BlockButton = styled(baseButton)`
  padding: ${toRem(8)};
  display: block;
`
