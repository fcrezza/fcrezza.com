import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup'
import {BlockButton} from './Button'
import Modal from './Modal'
import colors from '../utils/colorSchemes'
import toRem from '../utils/toRem'
import {mobile, phone} from '../utils/mediaQuery'
import encode from '../utils/encode'

const Wrapper = styled.section`
  background: ${colors.smoothWhite};
  padding: ${toRem(80)} ${toRem(90)};
  display: flex;
  justify-content: space-between;
  transition: background 0.4s;
  ${mobile({padding: `${toRem(30)} ${toRem(50)}`, flexDirection: 'column'})}
  ${phone({padding: `${toRem(30)} ${toRem(30)}`})}
`

const Left = styled.div`
  margin-right: ${toRem(40)};
  ${mobile({marginRight: 0})}

  h1 {
    color: ${colors.black};
    font-weight: 700;
    margin: 0;
    font-size: ${toRem(50)};
    ${mobile({fontSize: toRem(40)})}
    ${phone({fontSize: toRem(35)})}
  }

  h2 {
    color: ${colors.smoothBlack};
    margin: 0;
    font-size: ${toRem(32)};
    font-weight: 400;
    margin-bottom: ${toRem(26)};
    ${mobile({fontSize: toRem(30)})}
    ${phone({fontSize: toRem(25)})}
  }
`

const Right = styled.div`
  max-width: ${toRem(500)};
  width: 100%;
  ${mobile({margin: `${toRem(35)} 0 0`, maxWidth: '100%'})}

  form {
    padding: ${toRem(35)};
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    transition: background 0.4s;
  }

  input[type='email'],
  textarea {
    background: ${colors.smoothWhite};
    padding: ${toRem(15)};
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: ${toRem(18)};
    color: ${colors.smoothBlack};
    border: 0;
    margin-bottom: ${toRem(10)};
    width: 100%;
  }

  textarea {
    min-height: ${toRem(230)};
    resize: vertical;
  }
`

const ErrorMsg = styled.p`
  color: ${colors.darkPink};
  margin: 0 0 ${toRem(15)};
`

const CustomErrorMessage = ({name}) => (
  <ErrorMsg>
    <ErrorMessage name={name} />
  </ErrorMsg>
)

CustomErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
}

const Contact = () => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('')

  const toggleModal = () => {
    setOpen(prevState => !prevState)
  }

  const handleSetType = text => {
    setType(text)
  }

  return (
    <>
      <Wrapper id="contact">
        <Left>
          <h2>Want to make your beautiful website?</h2>
          <h1>Send a message to me!</h1>
        </Left>
        <Right>
          <Formik
            initialValues={{email: '', message: ''}}
            validationSchema={object({
              email: string()
                .email('please enter a valid email')
                .required('field must be filled in'),
              message: string().required('field must be filled in'),
            })}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={({email, message}, {setSubmitting, resetForm}) => {
              setSubmitting(true)
              resetForm()
              axios
                .post('/', encode({'form-name': 'contact', email, message}), {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                })
                .then(() => {
                  setSubmitting(false)
                  toggleModal()
                  handleSetType('success')
                })
                .catch(() => {
                  setSubmitting(false)
                  toggleModal()
                  handleSetType('error')
                })
            }}
          >
            {({isSubmitting}) => (
              <Form name="contact" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Field name="email" type="email" placeholder="Your email" />
                <CustomErrorMessage name="email" />
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Enter your message here"
                />
                <CustomErrorMessage name="message" />
                <BlockButton type="submit">
                  {isSubmitting ? 'Sending message...' : 'Send'}
                </BlockButton>
              </Form>
            )}
          </Formik>
        </Right>
      </Wrapper>
      {open && <Modal type={type} open={open} toggleModal={toggleModal} />}
    </>
  )
}

export default Contact
