import React, {PropTypes} from 'react'
import cx from 'classnames'

const className = 'avatar'

const Avatar = ({image, size, initials}) => {
  const classes = cx(className, {
    [`${className}--${size}`]: size,
    [`${className}--no-img`]: !image && initials
  })

  return (
    <figure className={classes}>
      {image && <img src={image} />}
      {!image && initials && <span>{initials}</span>}
    </figure>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
  initials: PropTypes.string,
  size: PropTypes.string
}

export default Avatar
