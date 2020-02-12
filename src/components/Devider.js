import styled from 'styled-components'
import colors from '../utils/colorSchemes'
import toRem from '../utils/toRem'

export const SmallDevider = styled.div`
  width: 6px;
  height: 6px;
  background: ${colors.smoothWhite};
  border-radius: 50%;
  margin: 0 ${toRem(16)};
`

export const BigDevider = styled.div`
  min-width: 12px;
  min-height: 12px;
  background: ${colors.smoothGrey};
  border-radius: 50%;
  margin: 0 ${toRem(32)};
`
