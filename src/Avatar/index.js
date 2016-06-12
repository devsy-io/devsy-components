import React, {PropTypes} from 'react'

const Avatar = (props) => {
  const className = `avatar avatar--${props.size}`
  return (
    <figure className={className}>
      <img src={props.image} />
    </figure>
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired
}

Avatar.defaultProps = {
  image: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  size: 's'
}

export default Avatar
