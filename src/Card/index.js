import React, {PropTypes, Component} from 'react'

export default class Card extends Component {
  render () {
    const { message, fullname, username } = this.props
    return (
      <div className='column col-4'>
        <div className='card'>
          <div className='card-header'>
            <figure className='avatar avatar-lg'>
              <img src='https://picturepan2.github.io/spectre/demo/img/avatar-1.png' />
            </figure>
            <h4 className='card-title'>{fullname}</h4>
            <h6 className='card-meta'>{username}</h6>
          </div>
          <div className='card-body'>{message}</div>
          <div className='card-footer'>
            <button className='btn lnr lnr-bubble'></button>
            <button className='btn lnr lnr-heart'></button>
            <button className='btn lnr lnr-code'></button>
          </div>
        </div>
      </div>
    )
  }
}

Card.PropTypes = {
  fullname: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
  message: PropTypes.string
}
