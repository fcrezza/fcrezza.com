import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
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
import isLight from '../utils/isLight'

const WorkSection = styled.section`
  background: ${({theme}) =>
    isLight(theme) ? color.common.lightWhite : color.dark.dark};
  transition: all 0.4s ease;
`

const WorkWrapper = styled.div`
  max-width: ${toRem(900)};
  padding: ${toRem(20)} 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
`

const Message = styled.p`
  color: ${({theme}) =>
    isLight(theme) ? color.light.smoothDark : color.dark.smoothWhite};
  font-size: ${toRem(29)};
  margin-right: ${toRem(110)};
`

const Stack = styled.div`
  &:not(:last-child) {
    margin-right: ${toRem(32)};
  }

  svg {
    transition: color 0.4s;
  }
`

const StackWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Work = () => {
  const [id, setId] = useState('')
  const theme = getThemeValue()
  const [stackColor, setStackColor] = useState({
    color: color.light.grey,
    active: color.light.strongGrey,
  })

  useEffect(() => {
    if (isLight(theme)) {
      setStackColor({color: color.light.grey, active: color.light.strongGrey})
    } else {
      setStackColor({
        color: color.dark.strongGrey,
        active: color.dark.smoothWhite,
      })
    }
  }, [theme])

  useEffect(() => {
    const handleFocus = ({target}) => {
      setId(target.dataset.id)
    }

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
      <WorkWrapper>
        <Message theme={theme}>Usually I work using</Message>
        <StackWrapper>
          <ReactTooltip
            place="bottom"
            type={isLight(theme) ? 'dark' : 'light'}
            effect="solid"
          />
          <Stack data-tip="Html5" className="stack" data-id="html">
            <FontAwesomeIcon
              icon={faHtml5}
              size="4x"
              color={
                id === 'html'
                  ? stackColor.active
                  : stackColor.color
              }
            />
          </Stack>
          <BigDevider theme={theme} />
          <Stack data-tip="Css3" className="stack" data-id="css">
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="4x"
              color={
                id === 'css'
                  ? stackColor.active
                  : stackColor.color
              }
            />
          </Stack>
          <BigDevider theme={theme} />
          <Stack data-tip="Javascript" className="stack" data-id="js">
            <FontAwesomeIcon
              icon={faJs}
              size="4x"
              color={
                id === 'js'
                  ? stackColor.active
                  : stackColor.color
              }
            />
          </Stack>
          <BigDevider theme={theme} />
          <Stack data-tip="Reactjs" className="stack" data-id="react">
            <FontAwesomeIcon
              icon={faReact}
              size="4x"
              color={
                id === 'react'
                  ? stackColor.active
                  : stackColor.color
              }
            />
          </Stack>
        </StackWrapper>
      </WorkWrapper>
    </WorkSection>
  )
}

export default Work
