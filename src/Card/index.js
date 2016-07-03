import React, {PropTypes} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'
import Button from '../Button'
import Avatar from '../Avatar'
import Icon from '../Icon'

export default function Card ({ avatar, message, fullname, username, snippet = {} }) {
  return (
    <article className='card'>
      <header className='card-header'>
        <Avatar img={avatar} size={'l'} />
        <h4 className='card-title'>{fullname}</h4>
        <h6 className='card-meta'>{username}</h6>
      </header>
      <section className='card-body'>{message}</section>
      <SyntaxHighlighter language={snippet.language} style={docco}>
        {snippet.code}
      </SyntaxHighlighter>
      <footer className='card-footer'>
        <Button><Icon name='like' /></Button>
        <Button><Icon name='star' /></Button>
        <Button><Icon name='share' /></Button>
      </footer>
    </article>
  )
}

Card.propTypes = {
  avatar: PropTypes.string,
  fullname: PropTypes.string,
  username: PropTypes.string,
  message: PropTypes.string,
  snippet: PropTypes.shape({
    language: PropTypes.string,
    code: PropTypes.string
  })
}

Card.defaultProps = {
  avatar: 'https://picturepan2.github.io/spectre/demo/img/avatar-1.png'
}
