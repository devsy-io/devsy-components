import React, {PropTypes} from 'react'

const Theme = (props) => {
  return (
    <div className='theme'>
      {props.children}
    </div>
  )
}

Theme.propTypes = {
  children: PropTypes.array
}

export default Theme
