import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup'
import {BlockButton} from './Button'
import {getThemeValue} from '../utils/ThemeContext'
import color from '../utils/colorSchemes'
import toRem from '../utils/toRem'
import mobile from '../utils/mobile'
import isLight from '../utils/isLight'

const Wrapper = styled.section`
	background: ${({theme}) =>
		isLight(theme) ? color.common.smoothWhite : color.dark.darkGrey};
	padding: ${toRem(80)} ${toRem(90)};
	display: flex;
	justify-content: space-between;
	transition: background 0.4s;
	${mobile({padding: `${toRem(30)} ${toRem(90)}`})}
`

const Left = styled.div`
	h1 {
		color: ${({theme}) =>
			isLight(theme) ? color.light.dark : color.dark.white};
		margin: 0;
		font-size: ${toRem(53)};
	}

	h2 {
		color: ${({theme}) =>
			isLight(theme) ? color.light.smoothDark : color.dark.smoothWhite};
		margin: 0;
		font-weight: 400;
		font-size: ${toRem(38)};
		margin-bottom: ${toRem(26)};
	}
`

const Right = styled.div`
	max-width: ${toRem(500)};
	width: 100%;

	form {
		padding: ${toRem(35)};
		background: ${({theme}) =>
			isLight(theme) ? color.common.lightWhite : color.dark.dark};
		display: flex;
		flex-direction: column;
		transition: background 0.4s;
	}

	input[type='email'],
	textarea {
		background: ${color.common.smoothWhite};
		padding: ${toRem(14)};
		outline: none;
		font-family: 'Cuprum', sans-serif;
		font-size: ${toRem(20)};
		color: ${color.common.lowDark};
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
	color: red;
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
	const theme = getThemeValue()

	return (
		<Wrapper id="contact" theme={theme}>
			<Left theme={theme}>
				<h2>Want to make your beautiful website?</h2>
				<h1>Send a message to me!</h1>
			</Left>
			<Right theme={theme}>
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
					onSubmit={values => {
						console.log(JSON.stringify(values, null, 2))
					}}
				>
					<Form>
						<Field name="email" type="email" placeholder="Your email" />
						<CustomErrorMessage name="email" />
						<Field
							name="message"
							as="textarea"
							placeholder="Enter your message here"
						/>
						<CustomErrorMessage name="message" />
						<BlockButton type="submit">Send</BlockButton>
					</Form>
				</Formik>
			</Right>
		</Wrapper>
	)
}

export default Contact
