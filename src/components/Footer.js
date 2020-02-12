import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colorSchemes'
import toRem from '../utils/toRem'

const FooterWrapper = styled.footer`
	background: ${colors.purple};
	padding: ${toRem(28)};
	text-align: center;
	color: ${colors.smoothWhite};
	font-size: ${toRem(22)};
	transition: background 0.4s;

	a {
		color: ${colors.smoothWhite};
	}
`

const Footer = () => {
	return (
		<FooterWrapper>
			&copy; 2020 <a href="/">Anang Fachreza</a> All rights reserved.
		</FooterWrapper>
	)
}

export default Footer
