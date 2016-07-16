import React, { PropTypes } from 'react'
import cx from 'classnames'

function noop () {}

export default function Button ({children, className, onClick, style}) {
  const baseClass = 'button'
  const classes = cx(baseClass, {
    [className]: className,
    [`${baseClass}-borderless`]: !style.border
  })

  return (
    <button
      className={classes}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape({
    border: PropTypes.bool.isRequired
  }).isRequired
}

Button.defaultProps = {
  onClick: noop,
  style: {
    border: true
  }
}
