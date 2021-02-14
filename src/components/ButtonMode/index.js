import React from 'react'
import classnames from 'classnames'

import styles from './button.module.css'
import {Sun as SunIcon, Moon as MoonIcon} from './Icon'

function ButtonMode() {
  const [buttonActive, setButtonActive] = React.useState('light')

  const onClickButton = mode => {
    setButtonActive(mode)
  }

  return (
    <div className={styles.buttonModeContainer}>
      <button
        className={classnames(styles.buttonModeButton, {
          [styles.buttonModeActive]: buttonActive === 'light',
        })}
        onClick={() => onClickButton('light')}
      >
        <SunIcon fill={buttonActive === 'light' ? '#fff' : '#333'} />
      </button>
      <button
        className={classnames(styles.buttonModeButton, {
          [styles.buttonModeActive]: buttonActive === 'dark',
        })}
        onClick={() => onClickButton('dark')}
      >
        <MoonIcon fill={buttonActive === 'dark' ? '#fff' : '#333'} />
      </button>
    </div>
  )
}

export default ButtonMode
