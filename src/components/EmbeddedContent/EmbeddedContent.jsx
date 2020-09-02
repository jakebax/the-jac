import React from 'react'

const EmbeddedContent = ({ style: propStyle, src, title }) => {
  const style = {
    border: 0,
    width: '350px',
    height: '470px',
    ...propStyle,
  }

  return <iframe style={style} src={src} title={title} />
}

export default EmbeddedContent
