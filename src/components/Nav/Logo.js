import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import toRem from '../../utils/toRem'
import logoImg from '../../images/logo.svg'

const Brand = styled.img.attrs({
	src: logoImg,
	alt: 'logo',
})`
	display: block;
	width: ${toRem(55)};
	height: ${toRem(55)};
`

const Logo = () => (
	<Link to="/" className="logo">
		<Brand />
	</Link>
)

export default Logo
