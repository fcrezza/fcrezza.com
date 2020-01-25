import styled from 'styled-components'
import toRem from '../utils/toRem'
import color from '../utils/colorSchemes'

const baseButton = styled.button`
  background: ${({background}) => background};
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
  color: ${color.common.smoothWhite};
  font-weight: 600;

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
`

export const InlineButton = styled(baseButton)`
  padding: ${toRem(13)};
`

export const BlockButton = styled(baseButton)`
  padding: ${toRem(8)};
  display: block;
`
