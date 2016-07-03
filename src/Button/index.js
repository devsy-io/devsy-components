import React from 'react'

export default function Button (props) {
  return <button className='btn'>{props.children}</button>
}

Button.propTypes = {
  children: React.PropTypes.node
}

Button.defaultProps = {
  children: null
}
