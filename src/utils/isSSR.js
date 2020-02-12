const isSSR = () => typeof window === 'undefined' || !window.document

export default isSSR