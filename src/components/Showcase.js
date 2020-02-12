import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import {InlineButton} from './Button'
import toRem from '../utils/toRem'
import colors from '../utils/colorSchemes'
import {mobile, phone} from '../utils/mediaQuery'
import useClickToScroll from '../utils/useClickToScroll'
import batthern from '../images/batthern.png'

const StyledShowcase = styled.section`
  background: url(${batthern});
  background-color: ${colors.purple};
  height: ${toRem(608)};
  padding: 0 ${toRem(90)};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({padding: `0 ${toRem(50)}`})}
  ${phone({padding: `0 ${toRem(30)}`})}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${toRem(310)};
  align-items: center;
  margin-top: ${toRem(40)};
  z-index: 1;

  ${mobile({height: toRem(270)})}
  ${phone({height: toRem(280), textAlign: 'center'})}
`

const WelcomeMsg = styled.h3`
  color: ${colors.white};
  font-size: ${toRem(45)};
  margin: 0;
  font-weight: 600;
  ${mobile({fontSize: toRem(35)})}
  ${phone({fontSize: toRem(30)})}
`

const Title = styled.h1`
  color: ${colors.white};
  font-size: ${toRem(60)};
  margin: 0;
  font-weight: 700;
  ${mobile({fontSize: toRem(50)})}
  ${phone({fontSize: toRem(40)})}
`
const Subtitle = styled.p`
  color: ${colors.smoothWhite};
  font-size: ${toRem(38)};
  margin: 0;
  ${mobile({fontSize: toRem(30)})}
  ${phone({fontSize: toRem(27)})}
`

const Showcase = () => {
  const clickToScroll = useClickToScroll('.to-contact')
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
          <InlineButton className="to-contact" data-name="contact">
            Send a message
          </InlineButton>
        </div>
      </Wrapper>
    </StyledShowcase>
  )
}

export default Showcase
