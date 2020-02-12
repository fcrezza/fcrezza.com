import {css} from 'styled-components'

export const mobile = style =>
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
