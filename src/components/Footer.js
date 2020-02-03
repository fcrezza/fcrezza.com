import React from 'react'
import styled from 'styled-components'
import {getThemeValue} from '../utils/ThemeContext'
import color from '../utils/colorSchemes'
import toRem from '../utils/toRem'
import isLight from '../utils/isLight'

const FooterWrapper = styled.footer`
	background: ${({theme}) =>
		isLight(theme) ? color.light.blue : color.dark.darkBlue};
	padding: ${toRem(28)};
	text-align: center;
	color: ${color.common.smoothWhite};
	font-size: ${toRem(21)};
	transition: background 0.4s;

	a {
		color: ${color.common.smoothWhite};
	}
`

const Footer = () => {
	const theme = getThemeValue()
	return (
		<FooterWrapper theme={theme}>
			&copy; 2020 <a href="/">Anang Fachreza</a> All rights reserved.
		</FooterWrapper>
	)
}

export default Footer
