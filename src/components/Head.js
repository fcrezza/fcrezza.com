import React from 'react'
import Helmet from 'react-helmet'

import favicon from '../assets/favicon.ico'

const defaultTitle = 'Anang Fachreza Personal Website'
const defaultDescription = 'Anang Fachreza Personal Website'

function Head({title = defaultTitle, description = defaultDescription}) {
  return (
    <Helmet>
      <html lang="id" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}

export default Head
