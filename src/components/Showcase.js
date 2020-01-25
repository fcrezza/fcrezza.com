import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import {InlineButton} from './Button'
import {getThemeValue} from '../utils/ThemeContext'
import toRem from '../utils/toRem'
import color from '../utils/colorSchemes'
import mobile from '../utils/mobile'
import hero from '../images/hero.svg'

const StyledShowcase = styled.section`
  background: url(${hero});
  background-repeat: no-repeat;
  height: ${toRem(600)};
  background-position: center;
  padding: 0 ${toRem(80)};
  display: flex;
  align-items: center;

  ${mobile({padding: `0 ${toRem(50)}`})}
`

const Wrapper = styled.div`
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: space-between;
`

const WelcomeMsg = styled.h3`
  color: ${color.common.white};
  font-size: ${toRem(36)};
  margin: 0;
  ${mobile({fontSize: toRem(30)})}
`

const Title = styled.h1`
  color: ${color.common.white};
  font-size: ${toRem(55)};
  margin: 0;
  ${mobile({fontSize: toRem(45)})}
`
const Subtitle = styled.p`
  color: ${color.common.smoothWhite};
  font-size: ${toRem(30)};
  margin: 0;
  ${mobile({fontSize: toRem(25)})}
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
    <StyledShowcase>
      <Wrapper>
        <WelcomeMsg>{site.siteMetadata.welcome}</WelcomeMsg>
        <Title>{site.siteMetadata.title}</Title>
        <Subtitle>{site.siteMetadata.subtitle}</Subtitle>
        <div>
          <InlineButton
            background={
              theme === 'light' ? color.light.blue : color.dark.darkBlue
            }
          >
            Send a message
          </InlineButton>
        </div>
      </Wrapper>
    </StyledShowcase>
  )
}

export default Showcase
