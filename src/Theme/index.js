import React, {PropTypes} from 'react'

export default function Theme ({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

Theme.propTypes = {
  children: PropTypes.array
}
