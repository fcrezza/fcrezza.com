import {useEffect, useState} from 'react'

const useScroll = () => {
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(document.documentElement.scrollTop)
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollValue
}

export default useScroll
