import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Button, Icon } from 'devsy-components'

function noop () {}

export default function IconButton ({children, className, icon, onClick}) {
  const classes = cx('icon-button', {
    [className]: className
  })

  return (
    <Button className={classes} onClick={onClick} style={{border: false}}>
      <Icon name={icon} />
    </Button>
  )
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

IconButton.defaultProps = {
  onClick: noop
}
