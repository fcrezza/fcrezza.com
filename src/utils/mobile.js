import {css} from 'styled-components'

const mobile = style =>
  css`
    @media screen and (max-width: 768px) {
      ${{...style}}
    }
  `

export const phone = style =>
  css`
    @media screen and (max-width: 480px) {
      ${{...style}}
    }
  `

export default mobile
