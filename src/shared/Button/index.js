import React from 'react'
import styles from './button.module.css'

function Button({children, onClick, ...props}) {
	return (
		<button className={styles.button} onClick={onClick} {...props}>
			{children}
		</button>
	)
}

export default Button
