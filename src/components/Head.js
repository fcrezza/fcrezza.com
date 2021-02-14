import React from 'react'
import Helmet from 'react-helmet'

const defaultTitle = 'Anang Fachreza Personal Website'
const defaultDescription = 'Anang Fachreza Personal Website'

function Head({title = defaultTitle, description = defaultDescription}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Head
