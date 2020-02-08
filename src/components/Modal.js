import React, {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import color from '../utils/colorSchemes'
import toRem from '../utils/toRem'
import {phone} from '../utils/mobile'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;

  .content {
    max-width: ${toRem(600)};
    width: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${toRem(25)};
    background: ${color.common.smoothWhite};
  }

  .close-btn {
    border: 0;
    background: transparent;
    padding: 0;
    position: absolute;
    top: ${toRem(10)};
    right: ${toRem(15)};
    outline: none;
    cursor: pointer;
  }
`

const MessageWrapper = styled.div`
  .title {
    color: ${({type}) => (type === 'success' ? color.light.blue : '#F5587B')};
    margin: ${toRem(30)} 0 ${toRem(20)};
    ${phone({fontSize: toRem(30)})}
  }

  .subtitle {
    color: ${color.light.dark};
    margin: 0 0 ${toRem(25)};
    font-size: ${toRem(25)};
    ${phone({fontSize: toRem(20)})}
  }
`

const Message = ({type}) => {
  if (type === 'success') {
    return (
      <MessageWrapper type={type}>
        <h1 className="title">Yeay, your message was sent successfully</h1>
        <p className="subtitle">
          Don&apos;t forget to check your email later when I reply your message.
        </p>
      </MessageWrapper>
    )
  } else {
    return (
      <MessageWrapper type={type}>
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

const modalContainer = document.getElementById('modal')
const div = document.createElement('div')

const Modal = ({type, toggleModal}) => {
  const el = useRef()

  const handleClickOutside = ({target}) => {
    if (target === el.current) {
      toggleModal()
    }
  }

  useEffect(() => {
    modalContainer.appendChild(div)
    document.addEventListener('click', handleClickOutside)

    return () => {
      modalContainer.removeChild(div)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return createPortal(
    <ModalWrapper
      ref={ref => {
        el.current = ref
      }}
    >
      <div className="content">
        {/* eslint-disable-next-line */}
        <button className="close-btn" onClick={toggleModal}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
        <Message type={type} />
      </div>
    </ModalWrapper>,
    div,
  )
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Modal
