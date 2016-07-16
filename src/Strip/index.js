import React, { PropTypes } from 'react'
import {Button, Icon} from 'devsy-components'

export default function Strip (props) {
  return (
    <div className='strip'>
      <Button className='button-close'>
        <Icon name='x' />
      </Button>
      ¡Hola!
    </div>
  )
}

Strip.propTypes = {
  alterBody: PropTypes.bool.isRequired,
  content: PropTypes.element,
  isOpen: React.PropTypes.bool.isRequired
}

Strip.defaultProps = {
  alterBody: true,
  isOpen: false
}
