import styled from 'styled-components'
import color from '../utils/colorSchemes'
import toRem from '../utils/toRem'

export const SmallDevider = styled.div`
  width: 6px;
  height: 6px;
  background: ${color.common.smoothWhite};
  border-radius: 50%;
  margin-right: ${toRem(16)};
`

export const BigDevider = styled.div`
  min-width: 12px;
  min-height: 12px;
  background: ${({theme}) =>
    theme === 'light' ? color.light.grey : color.dark.strongGrey};
  border-radius: 50%;
  margin: 0 ${toRem(32)};
`
