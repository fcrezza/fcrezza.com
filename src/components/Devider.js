import styled from 'styled-components'
import color from '../utils/colorSchemes'
import toRem from '../utils/toRem'

export const SmallDevider = styled.div`
  width: 6px;
  height: 6px;
  background: ${color.common.smoothWhite};
  border-radius: 50%;
  margin-right: ${toRem(12)};
`

export const BigDevider = styled.div`
  width: 12px;
  height: 12px;
  background: ${({theme}) =>
    theme === 'light' ? color.light.grey : color.dark.strongGrey};
  border-radius: 50%;
  margin-right: ${toRem(30)};
`
