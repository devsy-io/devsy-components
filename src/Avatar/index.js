import React, {PropTypes} from 'react'
import cx from 'classnames'

const Avatar = ({image, size, initials}) => {
  const className = cx('avatar', {
    [`avatar--${size}`]: size
  })

  return (
    <figure className={className}>
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
