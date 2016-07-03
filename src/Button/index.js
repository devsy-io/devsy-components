import React from 'react'

export default function Button (props) {
  return <button className='button'>{props.children}</button>
}

Button.propTypes = {
  children: React.PropTypes.node
}

Button.defaultProps = {
  children: null
}
