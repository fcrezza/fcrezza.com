import {useEffect} from 'react'

const ClickToScroll = classname => {
	useEffect(() => {
		const isIE11 = !!window.MSInputMethodContext && !!document.documentMode
		const listOfLinks = document.querySelectorAll(classname)
		
		listOfLinks.forEach(link => {
			link.addEventListener('click', () => {
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
}

export default ClickToScroll
