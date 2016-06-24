import React from 'react'

export default function Button (props) {
  return <button className='btn {props.icon}'></button>
}

Button.propTypes = {
}

Button.defaultProps = {
}
