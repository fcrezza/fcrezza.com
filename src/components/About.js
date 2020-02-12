import React from 'react'
import styled from 'styled-components'
import toRem from '../utils/toRem'
import {mobile, phone} from '../utils/mediaQuery'
import colors from '../utils/colorSchemes'
import me from '../images/me.svg'

const AboutSection = styled.section`
  background: ${colors.smoothWhite};
  padding: ${toRem(80)} ${toRem(90)};
  ${mobile({padding: `${toRem(60)} ${toRem(50)}`})}
  ${phone({padding: `${toRem(40)} ${toRem(30)}`})}
`

const AboutWrapper = styled.div`
  max-width: ${toRem(900)};
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
`

const Left = styled.div`
  max-width: ${toRem(260)};
  height: ${toRem(220)};
  width: 100%;  
  background: url(${me});
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: ${toRem(160)};
  ${mobile({marginRight: 60})}
  ${phone({display: 'none'})}
`

const Right = styled.div`
  width: ${toRem(400)};
  
  h2 {
    color: ${colors.black};
    font-size: ${toRem(45)};
    margin: ${toRem(10)} 0 ${toRem(20)};
    ${mobile({fontSize: 35, margin: `0 0 ${toRem(20)}`})}
    ${phone({fontSize: 32})}
  }

  p {
    color: ${colors.smoothBlack};
    font-size: ${toRem(33)};
    line-height: 1.3;
    margin: 0;
    ${mobile({fontSize: 27})}
    ${phone({fontSize: 24})}
  }
`

const About = () => {
  return (
    <AboutSection id="about">
      <AboutWrapper>
        <Left />
        <Right>
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
