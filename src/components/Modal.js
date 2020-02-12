import React, {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'
import styled, {createGlobalStyle} from 'styled-components'
import colors from '../utils/colorSchemes'
import toRem from '../utils/toRem'
import isSSR from '../utils/isSSR'
import {phone} from '../utils/mediaQuery'
import hexToRGB from '../utils/hexToRGB'

const Global = createGlobalStyle`
  body {
    overflow: ${open => (open ? 'hidden' : 'unset')};
  }
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({type}) =>
    type === 'success'
      ? `rgba(${hexToRGB(colors.purple)},0.5)`
      : `rgba(${hexToRGB(colors.pink)},0.5)`};
  z-index: 2;

  .content {
    max-width: ${toRem(600)};
    width: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${toRem(25)};
    background: ${colors.smoothWhite};
  }
`

const CloseBtn = styled.button`
  border: 0;
  background: transparent;
  padding: ${toRem(8)} ${toRem(12)};
  position: absolute;
  font-size: ${toRem(18)};
  bottom: ${toRem(25)};
  right: ${toRem(40)};
  outline: none;
  cursor: pointer;
  color: ${({color}) => (color === 'success' ? colors.purple : colors.pink)};

  &:hover {
    background: rgba(${hexToRGB(colors.smoothGrey)}, 0.5);
  }
`

const MessageWrapper = styled.div`
  .title {
    color: ${({type}) => (type === 'success' ? colors.purple : colors.pink)};
    font-weight: 700;
    font-size: ${toRem(35)};
    margin: ${toRem(10)} 0 ${toRem(20)};
    ${phone({fontSize: toRem(30)})}
  }

  .subtitle {
    color: ${colors.smoothBlack};
    font-size: ${toRem(25)};
    margin: 0 0 ${toRem(60)};
    font-size: ${toRem(25)};
    ${phone({fontSize: toRem(20)})}
  }
`

const Message = ({type}) => {
  if (type === 'success') {
    return (
      <MessageWrapper type="success">
        <h1 className="title">Yeay, your message was sent successfully</h1>
        <p className="subtitle">
          Don&apos;t forget to check your email later when I reply your message.
        </p>
      </MessageWrapper>
    )
  } else {
    return (
      <MessageWrapper type="error">
        <h1 className="title">Whoops, something went wrong</h1>
        <p className="subtitle">
          Make sure you have a stable internet connection.
        </p>
      </MessageWrapper>
    )
  }
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
}

let modalContainer
let div

if (!isSSR()) {
  modalContainer = document.createElement('div')
  modalContainer.id = 'modal-container'
  document.body.appendChild(modalContainer)
  div = document.createElement('div')
}

const Modal = ({type, toggleModal, open}) => {
  const el = useRef()

  const handleClickOutside = ({target}) => {
    if (target === el.current) {
      toggleModal()
    }
  }

  useEffect(() => {
    if (!isSSR()) {
      document.addEventListener('click', handleClickOutside)
    }
    modalContainer.appendChild(div)

    return () => {
      if (!isSSR()) {
        document.removeEventListener('click', handleClickOutside)
      }
      modalContainer.removeChild(div)
    }
  }, [])

  return createPortal(
    <>
      <Global open={open} />
      <ModalWrapper
        type={type}
        ref={ref => {
          el.current = ref
        }}
      >
        <div className="content">
          <Message type={type} />
          <CloseBtn color={type} onClick={toggleModal}>
            OK
          </CloseBtn>
        </div>
      </ModalWrapper>
    </>,
    div,
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Modal
