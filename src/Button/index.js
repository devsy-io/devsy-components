import React, { PropTypes } from 'react'
import cx from 'classnames'

function noop () {}

export default function Button ({children, className, onClick}) {
  const classes = cx('button', {
    [className]: className
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
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  onClick: noop
}
