import React, { PropTypes } from 'react'

function emptyFn () {}

export default function Button ({children, className, onClick}) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  onClick: emptyFn
}
