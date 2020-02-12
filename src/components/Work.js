import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {BigDevider} from './Devider'
import colors from '../utils/colorSchemes'
import toRem from '../utils/toRem'
import {mobile, phone} from '../utils/mediaQuery'

const WorkSection = styled.section`
  background: ${colors.white};
  padding: ${toRem(20)} ${toRem(90)};
  ${mobile({padding: `${toRem(20)} ${toRem(50)}`})}
  ${phone({padding: `${toRem(20)} ${toRem(30)}`})}
`

const WorkWrapper = styled.div`
  max-width: ${toRem(900)};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const Message = styled.p`
  color: ${colors.smoothBlack};
  font-size: ${toRem(29)};
  margin-right: ${toRem(110)};
  ${mobile({fontSize: toRem(25), marginRight: toRem(70)})}
  ${phone({marginRight: toRem(50)})}
`

const StackWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mobile({overflowX: 'auto', marginLeft: 'auto'})}
  ${phone({width: toRem(170)})}
`

const Work = () => {
  return (
    <WorkSection>
      <WorkWrapper>
        <Message>Usually I work using</Message>
        <StackWrapper>
          <div>
            <FontAwesomeIcon
              icon={faHtml5}
              size="4x"
              color={colors.smoothGrey}
            />
          </div>
          <BigDevider />
          <div>
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="4x"
              color={colors.smoothGrey}
            />
          </div>
          <BigDevider />
          <div>
            <FontAwesomeIcon
              icon={faJs}
              size="4x"
              color={colors.smoothGrey}
            />
          </div>
          <BigDevider />
          <div>
            <FontAwesomeIcon
              icon={faReact}
              size="4x"
              color={colors.smoothGrey}
            />
          </div>
        </StackWrapper>
      </WorkWrapper>
    </WorkSection>
  )
}

export default Work
