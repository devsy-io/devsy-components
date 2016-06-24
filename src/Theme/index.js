import React, {PropTypes} from 'react'

export default function Theme (props) {
  return (
    <div className='theme'>
      {props.children}
    </div>
  )
}

Theme.propTypes = {
  children: PropTypes.array
}
