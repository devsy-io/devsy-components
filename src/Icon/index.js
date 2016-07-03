import React, { PropTypes } from 'react'

export default function Icon ({name, className}) {
  return (
    <svg role='img' className={`i-${name} ${className || ''}`}>
      <use xlinkHref={`#i-${name}`}></use>
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}
