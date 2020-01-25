import {useEffect, useState} from 'react'

const useScroll = () => {
  const [scrollValue, setScrollValue] = useState(0)

  const handleScroll = ({path}) => {
    setScrollValue(path[1].pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollValue
}

export default useScroll
