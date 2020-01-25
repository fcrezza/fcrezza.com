import {css} from 'styled-components'

const mobile = style =>
  css`
    @media screen and (max-width: 768px) {
      ${{...style}}
    }
  `

export default mobile
