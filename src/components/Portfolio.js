import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import Swiper from 'swiper'
import {getThemeValue} from '../utils/ThemeContext'
import toRem from '../utils/toRem'
import mobile, {phone} from '../utils/mobile'
import isLight from '../utils/isLight'
import color from '../utils/colorSchemes'
import hero from '../images/hero.jpg'
import '../../node_modules/swiper/css/swiper.css'

const Wrapper = styled.div`
  padding: ${toRem(35)} ${toRem(90)};
  background: ${({theme}) =>
    isLight(theme) ? color.light.blue : color.dark.darkBlue};
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${color.common.smoothWhite};
  font-size: ${toRem(40)};
  ${mobile({padding: `${toRem(30)} ${toRem(50)}`})}
  ${phone({padding: `${toRem(30)} ${toRem(30)}`})}
`

const Message = styled.div`
  max-width: ${toRem(550)};
  text-align: center;
  font-style: italic;
  line-height: 1.3;
  ${mobile({fontSize: toRem(34)})}

  div {
    margin: ${toRem(10)} 0 0;
  }
`

const PortfolioSection = styled.section`
  background: ${({theme}) =>
    isLight(theme) ? color.common.lightWhite : color.dark.dark};
  padding: ${toRem(80)} ${toRem(90)};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({padding: `${toRem(60)} ${toRem(50)}`})}
  ${phone({padding: `${toRem(50)} ${toRem(30)}`})}
`

const SliderContainer = styled.div`
  max-width: ${toRem(900)};
  width: 100%;
  max-height: ${toRem(550)};
`

const SliderItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover, &:focus {
    .background {
      transform: scale(1.5);
    }

    &::before {
      background: rgba(0,0,0,0.3);
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: background 0.4s;
    z-index: 1;
  }

  .background {
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
  }

  .content {
    position: absolute;
    z-index: 2;
    padding: ${toRem(45)};
    top: 50%;
    transform: translateY(-20%);
  ${phone({padding: toRem(30), transform: 'translateY(-45%)'})}
  }

  .title {
    margin: 0 0 ${toRem(18)};
    color: ${color.common.smoothWhite};
    font-size: ${toRem(45)};
    ${phone({fontSize: toRem(32), margin: `0 0 ${toRem(14)}`})}
  }

  .subtitle {
    margin: 0 0 ${toRem(20)};
    color: ${color.common.lightWhite};
    font-size: ${toRem(30)};
    ${phone({fontSize: toRem(23), margin: `0 0 ${toRem(15)}`})}
  }

  .link {
    text-decoration: none;
    display: inline-block;
    padding: ${toRem(10)} ${toRem(20)};
    font-size: ${toRem(20)};
    background: ${({theme}) =>
      isLight(theme) ? color.light.blue : color.dark.darkBlue};
    color: ${color.common.smoothWhite};
    ${phone({fontSize: toRem(15), padding: `${toRem(6)} ${toRem(10)}`})}
`

const Portfolio = () => {
  const theme = getThemeValue()
  const mySwiper = useRef()

  const handleMouseEnter = () => {
    mySwiper.current.autoplay.stop()
  }

  const handleMouseLeave = () => {
    mySwiper.current.autoplay.start()
  }

  useEffect(() => {
    mySwiper.current = new Swiper('.swiper-container', {
      autoplay: {
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }, [])

  return (
    <>
      <Wrapper theme={theme}>
        <Message>
          I have worked on several projects including my personal project, this
          is my portfolio.
          <div>
            <FontAwesomeIcon
              icon={faEdit}
              size="sm"
              color={color.common.smoothWhite}
            />
          </div>
        </Message>
      </Wrapper>
      <PortfolioSection id="portfolio" theme={theme}>
        <SliderContainer className="swiper-container">
          <div className="swiper-wrapper">
            <SliderItem
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="swiper-slide"
              data-id="1"
              theme={theme}
            >
              <img src={hero} alt="" className="background" />
              <div className="content">
                <h3 className="title">Congkir</h3>
                <p className="subtitle">Check package shipping costs</p>
                <a
                  href="https://congkir.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Visit
                </a>
              </div>
            </SliderItem>
            <SliderItem
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="swiper-slide"
              data-id="2"
              theme={theme}
            >
              <img src={hero} alt="" className="background" />
              <div className="content">
                <h3 className="title">Congkir</h3>
                <p className="subtitle">Check package shipping costs</p>
                <a
                  href="https://congkir.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Visit
                </a>
              </div>
            </SliderItem>
            <SliderItem
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="swiper-slide"
              data-id="3"
              theme={theme}
            >
              <img src={hero} alt="" className="background" />
              <div className="content">
                <h3 className="title">Congkir</h3>
                <p className="subtitle">Check package shipping costs</p>
                <a
                  href="https://congkir.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Visit
                </a>
              </div>
            </SliderItem>
          </div>
          <div className="swiper-pagination" />
        </SliderContainer>
      </PortfolioSection>
    </>
  )
}

export default Portfolio
