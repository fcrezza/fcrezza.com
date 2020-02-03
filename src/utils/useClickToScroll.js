import {useState, useEffect} from 'react'

const ClickToScroll = () => {
	const [active, setActive] = useState('home')

	useEffect(() => {
		const isIE11 = !!window.MSInputMethodContext && !!document.documentMode
		const listOfLinks = document.querySelectorAll('.navlink')
		listOfLinks.forEach(link => {
			link.addEventListener('click', () => {
				setActive(link.dataset.name)
				if (isIE11) {
					window.scrollTo(
						0,
						document.querySelector(`#${link.dataset.name}`).offsetTop,
					)
				} else {
					window.scroll({
						behavior: 'smooth',
						left: 0,
						top: document.querySelector(`#${link.dataset.name}`).offsetTop - 60,
					})
				}
			})
		})

		return () => {
			listOfLinks.forEach(link => {
				link.removeEventListener('click', () => {
					setActive(link.dataset.name)
					if (isIE11) {
						window.scrollTo(
							0,
							document.querySelector(`#${link.dataset.name}`).offsetTop,
						)
					} else {
						window.scroll({
							behavior: 'smooth',
							left: 0,
							top:
								document.querySelector(`#${link.dataset.name}`).offsetTop - 60,
						})
					}
				})
			})
		}
	}, [])

	return active
}

export default ClickToScroll
