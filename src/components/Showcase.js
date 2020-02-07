import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import {InlineButton} from './Button'
import {getThemeValue} from '../utils/ThemeContext'
import toRem from '../utils/toRem'
import color from '../utils/colorSchemes'
import mobile, {phone} from '../utils/mobile'
import hero from '../images/hero.jpg'

const StyledShowcase = styled.section`
  background: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  height: ${toRem(608)};
  background-position: center;
  padding: 0 ${toRem(90)};
  display: flex;
  align-items: center;
  position: relative;
  ${mobile({padding: `0 ${toRem(50)}`})}
  ${phone({padding: `0 ${toRem(30)}`})}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`

const Wrapper = styled.div`
  display: flex;
  height: ${toRem(300)};
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${toRem(40)};
  z-index: 1;

  ${mobile({height: toRem(270)})}
  ${phone({height: toRem(300), textAlign: 'center'})}
`

const WelcomeMsg = styled.h3`
  color: ${color.common.white};
  font-size: ${toRem(45)};
  margin: 0;
  ${mobile({fontSize: toRem(35)})}
  ${phone({fontSize: toRem(30)})}
`

const Title = styled.h1`
  color: ${color.common.white};
  font-size: ${toRem(60)};
  margin: 0;
  ${mobile({fontSize: toRem(50)})}
  ${phone({fontSize: toRem(45)})}
`
const Subtitle = styled.p`
  color: ${color.common.smoothWhite};
  font-size: ${toRem(38)};
  margin: 0;
  ${mobile({fontSize: toRem(30)})}
  ${phone({fontSize: toRem(27)})}
`

const Showcase = () => {
  const theme = getThemeValue()
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            welcome
            title
            subtitle
          }
        }
      }
    `,
  )

  return (
    <StyledShowcase id="home">
      <Wrapper>
        <WelcomeMsg>{site.siteMetadata.welcome}</WelcomeMsg>
        <Title>{site.siteMetadata.title}</Title>
        <Subtitle>{site.siteMetadata.subtitle}</Subtitle>
        <div>
          <InlineButton className="navlink" data-name="contact" theme={theme}>
            Send a message
          </InlineButton>
        </div>
      </Wrapper>
    </StyledShowcase>
  )
}

export default Showcase
