import styled from 'styled-components'
import toRem from '../utils/toRem'
import color from '../utils/colorSchemes'
import 'typeface-cuprum'

const baseButton = styled.button`
  background: ${({theme}) =>
    theme === 'light' ? color.light.blue : color.dark.darkBlue};
  border: none;
  transition: all 0.4s;
  cursor: pointer;
  color: ${color.common.smoothWhite};
  font-weight: 600;
  font-family: 'Cuprum', sans-serif;
  font-size: ${toRem(23)};

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
`

export const InlineButton = styled(baseButton)`
  padding: ${toRem(13)};
  font-size: ${toRem(26)};
`

export const BlockButton = styled(baseButton)`
  padding: ${toRem(8)};
  display: block;
`
