import React from 'react'
import classnames from 'classnames'

import styles from './button.module.css'
import {Sun as SunIcon, Moon as MoonIcon} from './Icon'

function ButtonMode() {
  const [activeMode, setActiveMode] = React.useState('light')

  const onClickButton = mode => {
    setActiveMode(mode)
  }

  React.useEffect(() => {
    if (activeMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [activeMode])

  return (
    <div className={styles.buttonModeContainer}>
      <button
        className={classnames(styles.buttonModeButton, {
          [styles.buttonModeActive]: activeMode === 'light',
        })}
        onClick={() => onClickButton('light')}
      >
        <SunIcon width={26} fill={activeMode === 'light' ? '#fff' : '#333'} />
      </button>
      <button
        className={classnames(styles.buttonModeButton, {
          [styles.buttonModeActive]: activeMode === 'dark',
        })}
        onClick={() => onClickButton('dark')}
      >
        <MoonIcon width={25} fill={activeMode === 'dark' ? '#fff' : '#333'} />
      </button>
    </div>
  )
}

export default ButtonMode
