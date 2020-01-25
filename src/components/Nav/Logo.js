import styled from 'styled-components'
import toRem from '../../utils/toRem'
import logoImg from '../../images/logo.svg'

const Logo = styled.img.attrs({
  src: logoImg,
  alt: 'logo',
})`
  display: block;
  width: ${toRem(50)};
  height: ${toRem(50)};
  margin-right: 30px;
`
export default Logo
