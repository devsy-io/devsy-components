import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Button, Icon } from 'devsy-components'

function noop () {}

export default function Strip ({className, children, handleCloseButton, visible}) {
  const classes = cx(className, {
    [`${className}--opened`]: visible
  })

  return (
    <div className={classes}>
      <Button className='button-close' onClick={handleCloseButton}>
        <Icon name='x' />
      </Button>
      {children}
    </div>
  )
}

Strip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleCloseButton: PropTypes.func.isRequired,
  visible: PropTypes.bool
}

Strip.defaultProps = {
  className: 'strip',
  handleCloseButton: noop,
  visible: true
}
