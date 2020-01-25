import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import {getThemeValue, getThemeUpdater} from '../../utils/ThemeContext'

const Toggle = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const ThemeToggle = () => {
  const value = getThemeValue()
  const update = getThemeUpdater()
  return (
    <Toggle onClick={update}>
      <FontAwesomeIcon
        icon={value === 'light' ? faMoon : faSun}
        size="lg"
        color="#1F4287"
      />
    </Toggle>
  )
}

export default ThemeToggle
