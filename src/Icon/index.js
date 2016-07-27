import React, { PropTypes } from 'react'

export default function Icon ({name, className = ''}) {
  const classes = `icon i-${name} ${className}`
  const href = `#i-${name}`
  return (
    <svg role='img' className={classes}>
      <use xlinkHref={href}></use>
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}
