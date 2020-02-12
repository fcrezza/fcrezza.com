import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Swiper from 'swiper'
import toRem from '../utils/toRem'
import {mobile, phone} from '../utils/mediaQuery'
import colors from '../utils/colorSchemes'
import hexToRGB from '../utils/hexToRGB'
import projectPurple from '../images/project-purple.svg'
import projectPink from '../images/project-pink.svg'
import '../../node_modules/swiper/css/swiper.css'

const Wrapper = styled.div`
  padding: ${toRem(50)} ${toRem(90)};
  background: ${colors.purple};
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.smoothWhite};
  font-size: ${toRem(40)};
  ${mobile({padding: `${toRem(40)} ${toRem(50)}`})}
  ${phone({padding: `${toRem(30)} ${toRem(30)}`})}
`

const Message = styled.div`
  max-width: ${toRem(550)};
  text-align: center;
  font-style: italic;
  line-height: 1.3;
  ${mobile({fontSize: toRem(32)})}
  ${phone({fontSize: toRem(30)})}

  div {
    margin: ${toRem(10)} 0 0;
  }
`

const PortfolioSection = styled.section`
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${toRem(80)} ${toRem(90)};
  ${mobile({padding: `${toRem(60)} ${toRem(50)}`})}
  ${phone({padding: `${toRem(50)} ${toRem(30)}`})}
`

const SliderWrapper = styled.div`
  position: relative;
  max-width: ${toRem(900)};
  max-height: ${toRem(550)};
  display: flex;

  ${mobile({width: '85%'})}
  ${phone({width: '75%'})}
`

const SliderItem = styled.div`
  width: ${toRem(440)};
  height: ${toRem(240)};
  overflow: hidden;
  background: url(${projectPurple});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  padding: ${toRem(30)};


  &:nth-child(odd) {
    background: url(${projectPink});
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
  }

  &:hover :nth-child(odd)::before {
    background: rgba(${hexToRGB(colors.pink)}, 0.8);
  }

  &:hover::before {
    background: rgba(${hexToRGB(colors.purple)}, 0.8);
  }

  &:nth-child(odd)::before {
    background: rgba(${hexToRGB(colors.pink)}, 0.9);
  }

  &::before {
    transition: background 0.3s;
    content: '';
    position: absolute;
    background: rgba(${hexToRGB(colors.purple)}, 0.91);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .content {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-40%);
    ${phone({padding: 0, transform: 'translateY(-50%)'})}
  }

  .title {
    margin: 0 0 ${toRem(15)};
    color: ${colors.white};
    font-size: ${toRem(32)};
    ${phone({fontSize: toRem(30), margin: `0 0 ${toRem(14)}`})}
  }

  .subtitle {
    margin: 0 0 ${toRem(20)};
    color: ${colors.smoothWhite};
    font-size: ${toRem(25)};
    ${phone({fontSize: toRem(24), margin: `0 0 ${toRem(18)}`})}
  }

  .link {
    text-decoration: none;
    font-size: ${toRem(20)};
    color: ${colors.white};

    span {
      margin-left: ${toRem(5)};
    }

    &:hover {
      text-decoration: underline;
      span {
        margin-left: ${toRem(10)};
      }
    }
  }
`

const ArrowNav = styled.button`
  background: transparent;
  position: absolute;
  width: ${toRem(35)};
  height: ${toRem(35)};
  border: ${({disabled}) =>
    disabled ? `1px solid ${colors.smoothGrey}` : `1px solid ${colors.black}`};
  border-radius: 50%;
  padding: 0;
  outline: none;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};

  &.right {
    top: 50%;
    right: -${toRem(60)};
  }

  &.left {
    top: 50%;
    left: -${toRem(60)};
  }
`

const Portfolio = () => {
  const swiperInit = useRef()
  const [disabledNav, setDisabledNav] = useState({left: true, right: false})

  useEffect(() => {
    swiperInit.current = new Swiper('.swiper-container', {
      slidesPerView: window.innerWidth > 768 ? 2 : 1,
      slidesPerGroup: window.innerWidth > 768 ? 2 : 1,
      spaceBetween: 20,
      navigation: {
        prevEl: '.prev-btn',
        nextEl: '.next-btn',
      }
    })
    swiperInit.current.on('slideChange', () => {
      if (swiperInit.current.isBeginning)
        setDisabledNav({left: true, right: false})
      else if (swiperInit.current.isEnd)
        setDisabledNav({left: false, right: true})
      else 
       setDisabledNav({left: false, right: false})
    })
  }, [])

  return (
    <>
      <Wrapper>
        <Message>
          I have worked on several projects including my personal project, this
          is my portfolio.
        </Message>
      </Wrapper>
      <PortfolioSection id="portfolio">
        <SliderWrapper>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <SliderItem className="swiper-slide">
                <div className="content">
                  <h3 className="title">Congkir</h3>
                  <p className="subtitle">Check package shipping costs</p>
                  <a
                    href="https://congkir.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Visit{' '}
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color={colors.white}
                      />
                    </span>
                  </a>
                </div>
              </SliderItem>
              <SliderItem className="swiper-slide">
                <div className="content">
                  <h3 className="title">Congkir</h3>
                  <p className="subtitle">Check package shipping costs</p>
                  <a
                    href="https://congkir.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Visit{' '}
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color={colors.white}
                      />
                    </span>
                  </a>
                </div>
              </SliderItem>
              <SliderItem className="swiper-slide">
                <div className="content">
                  <h3 className="title">Congkir</h3>
                  <p className="subtitle">Check package shipping costs</p>
                  <a
                    href="https://congkir.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Visit{' '}
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color={colors.white}
                      />
                    </span>
                  </a>
                </div>
              </SliderItem>
              <SliderItem className="swiper-slide">
                <div className="content">
                  <h3 className="title">Congkir</h3>
                  <p className="subtitle">Check package shipping costs</p>
                  <a
                    href="https://congkir.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Visit{' '}
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color={colors.white}
                      />
                    </span>
                  </a>
                </div>
              </SliderItem>
              <SliderItem className="swiper-slide">
                <div className="content">
                  <h3 className="title">Congkir</h3>
                  <p className="subtitle">Check package shipping costs</p>
                  <a
                    href="https://congkir.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Visit{' '}
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color={colors.white}
                      />
                    </span>
                  </a>
                </div>
              </SliderItem>
              <SliderItem className="swiper-slide">
                <div className="content">
                  <h3 className="title">Congkir</h3>
                  <p className="subtitle">Check package shipping costs</p>
                  <a
                    href="https://congkir.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Visit{' '}
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color={colors.white}
                      />
                    </span>
                  </a>
                </div>
              </SliderItem>
            </div>
          </div>
          <ArrowNav
            className="prev-btn left"
            disabled={disabledNav.left}
            
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              color={disabledNav.left ? colors.smoothGrey : colors.black}
            />
          </ArrowNav>
          <ArrowNav
            className="next-btn right"
            disabled={disabledNav.right}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              color={disabledNav.right ? colors.smoothGrey : colors.black}
            />
          </ArrowNav>
        </SliderWrapper>
      </PortfolioSection>
    </>
  )
}

export default Portfolio
