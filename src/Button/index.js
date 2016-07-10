import React, { PropTypes } from 'react'

function emptyFn () {}

export default function Button ({onClick, children}) {
  return (
    <button
      className='button'
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

Button.defaultProps = {
  children: null,
  onClick: emptyFn
}
