import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {BigDevider} from './Devider'
import {getThemeValue} from '../utils/ThemeContext'
import color from '../utils/colorSchemes'
import toRem from '../utils/toRem'
import mobile from '../utils/mobile'

const WorkSection = styled.section`
  background: ${({theme}) =>
    theme === 'light' ? color.common.lightWhite : color.dark.dark};
  padding: ${toRem(20)} ${toRem(80)};
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({padding: `${toRem(20)} ${toRem(50)}`})}
`

const Message = styled.p`
  color: ${({theme}) =>
    theme === 'light' ? color.light.smoothDark : color.dark.smoothWhite};
  font-size: ${toRem(27)};
  margin-right: ${toRem(50)};
`

const Stack = styled.div`
  &:not(:last-child) {
    margin-right: ${toRem(30)};
  }

  svg {
    transition: color 0.3s ease;
  }
`

const Work = () => {
  const [id, setId] = useState('')
  const theme = getThemeValue()
  let stackColor = {}

  if (theme === 'light') {
    stackColor = {color: color.light.grey, active: color.light.strongGrey}
  } else {
    stackColor = {color: color.dark.strongGrey, active: color.dark.smoothWhite}
  }

  const handleFocus = ({target}) => {
    setId(target.dataset.id)
  }

  useEffect(() => {
    const stacks = document.querySelectorAll('.stack')
    stacks.forEach(stack => stack.addEventListener('mouseenter', handleFocus))
    stacks.forEach(stack =>
      stack.addEventListener('mouseleave', () => setId('')),
    )

    return () => {
      stacks.forEach(stack =>
        stack.removeEventListener('mouseenter', handleFocus),
      )
      stacks.forEach(stack =>
        stack.removeEventListener('mouseleave', () => setId('')),
      )
    }
  }, [])

  return (
    <WorkSection theme={theme}>
      <Message theme={theme}>Usually I work using:</Message>
      <Stack className="stack" data-id="html">
        <FontAwesomeIcon
          icon={faHtml5}
          size="4x"
          color={id === 'html' ? stackColor.active : stackColor.color}
        />
      </Stack>
      <BigDevider theme={theme} />
      <Stack className="stack" data-id="css">
        <FontAwesomeIcon
          icon={faCss3Alt}
          size="4x"
          color={id === 'css' ? stackColor.active : stackColor.color}
        />
      </Stack>
      <BigDevider theme={theme} />
      <Stack className="stack" data-id="js">
        <FontAwesomeIcon
          icon={faJs}
          size="4x"
          color={id === 'js' ? stackColor.active : stackColor.color}
        />
      </Stack>
      <BigDevider theme={theme} />
      <Stack className="stack" data-id="react">
        <FontAwesomeIcon
          icon={faReact}
          size="4x"
          color={id === 'react' ? stackColor.active : stackColor.color}
        />
      </Stack>
    </WorkSection>
  )
}

export default Work
