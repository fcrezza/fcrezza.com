import styled, {css} from 'styled-components'
import colors from '../../utils/colorSchemes'
import toRem from '../../utils/toRem'

export const NavButton = styled.button`
	background: transparent;
	border: 0;
	padding: 0;
  cursor: pointer;
  color: ${({active}) => (active ? colors.white : colors.smoothWhite)};
  font-size: ${toRem(22)};
  outline: none;
  font-family: 'Source Sans Pro', sans-serif;
  
  ${({active}) =>  !active && css`
  	&:hover, &:focus {
  		color: ${colors.white};
  	}
  `}
`

export const NavButtonBlock = styled.button`
  background: ${({active}) => active ? colors.darkPink : colors.smoothWhite};
  border: 0;
  padding: ${toRem(10)};
  cursor: pointer;
  color: ${({active}) => (active ? colors.white : colors.smoothBlack)};
  font-size: ${toRem(22)};
  outline: none;
  font-family: 'Source Sans Pro', sans-serif;
  

  ${({active}) =>  !active && css`
    &:hover, &:focus {
      color: ${colors.white};
      background: ${colors.darkPink}; 
    }
  `}
`