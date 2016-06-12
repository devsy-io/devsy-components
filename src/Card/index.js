import React, {PropTypes, Component} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'
import Button from '../Button'
import Avatar from '../Avatar'

export default class Card extends Component {
  render () {
    const { avatar, message, fullname, username, snippet = {} } = this.props
    return (
      <div className='card'>
        <div className='card-header'>
          <Avatar img={avatar} size={'l'} />
          <h4 className='card-title'>{fullname}</h4>
          <h6 className='card-meta'>{username}</h6>
        </div>
        <div className='card-body'>{message}</div>
        <SyntaxHighlighter language={snippet.language} style={docco}>
          {snippet.code}
        </SyntaxHighlighter>
        <div className='card-footer'>
          <Button />
          <button className='btn lnr lnr-bubble'></button>
          <button className='btn lnr lnr-heart'></button>
          <button className='btn lnr lnr-code'></button>
        </div>
      </div>
    )
  }
}

Card.PropTypes = {
  fullname: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
  message: PropTypes.string,
  snippet: PropTypes.shape({
    language: PropTypes.string,
    code: PropTypes.string
  })
}

Card.defaultProps = {
  avatar: 'https://picturepan2.github.io/spectre/demo/img/avatar-1.png'
}
