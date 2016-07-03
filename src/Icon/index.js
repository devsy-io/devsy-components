import React from 'react'

export default function Icon ({name, className}) {
  return (
    <svg role='img' className={`i-${name} ${className || ''}`}>
      <use xlinkHref={`#i-${name}`}></use>
    </svg>
  )
}
