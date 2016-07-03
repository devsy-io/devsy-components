import React from 'react'

const tryRequireSvg = () => {
  try {
    return require('./sprite.svg')
  } catch (e) {
    console.warn( // eslint-disable-line
      'sprite: sprite.svg not found. Is it properly generated?'
    )
    return ''
  }
}

export default function Icon () {
  const sprite = tryRequireSvg()
    .replace(/<svg.*?>/, '')
    .replace(/<\/svg>/, '')

  return (
    <svg
      dangerouslySetInnerHTML={{__html: sprite}}>
    </svg>
  )
}
