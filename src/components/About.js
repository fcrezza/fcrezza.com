import React from 'react'
import styled from 'styled-components'
import {getThemeValue} from '../utils/ThemeContext'
import toRem from '../utils/toRem'
import mobile from '../utils/mobile'
import isLight from '../utils/isLight'
import color from '../utils/colorSchemes'
import testimonial from '../images/testimonial.jpg'

const AboutSection = styled.section`
  background: ${({theme}) =>
    isLight(theme) ? color.common.smoothWhite : color.dark.darkGrey};
  transition: all 0.4s ease;
  padding: ${toRem(80)} 0;
`

const AboutWrapper = styled.div`
  max-width: ${toRem(900)};
  display: flex;
  margin: 0 auto;
`

const Left = styled.div`
  width: ${toRem(300)};
  height: ${toRem(380)};
  box-shadow: 0 0 ${toRem(30)} rgba(0, 0, 0, 0.4);
  margin-right: ${toRem(100)};
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`

const Right = styled.div`
  width: ${toRem(460)};
  h2 {
    color: ${({theme}) =>
      isLight(theme) ? color.light.dark : color.dark.white};
    font-size: ${toRem(41)};
    margin: ${toRem(10)} 0 ${toRem(20)};
  }

  p {
    color: ${({theme}) =>
      isLight(theme) ? color.light.smoothDark : color.dark.smoothWhite};
    font-size: ${toRem(35)};
    line-height: 1.3;
    margin: 0;
  }
`

const About = () => {
  const theme = getThemeValue()

  return (
    <AboutSection id="about" theme={theme}>
      <AboutWrapper>
        <Left>
          <img src={testimonial} alt="" />
        </Left>
        <Right theme={theme}>
          <h2>ABOUT ME</h2>
          <p>
            As a frontend web developer I like to create beautiful websites so
            that it can provide a good experience for users in accessing the
            sites.
          </p>
        </Right>
      </AboutWrapper>
    </AboutSection>
  )
}

export default About
