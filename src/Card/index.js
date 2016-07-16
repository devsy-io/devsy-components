import React, { PropTypes } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'
import { Avatar, IconButton } from 'devsy-components'

export default function Card ({ avatar, message, fullname, username, snippet = {} }) {
  return (
    <article className='card'>
      <header className='card-header'>
        <Avatar image={avatar} size={'l'} />
        <h4 className='card-title'>{fullname}</h4>
        <h6 className='card-meta'>{username}</h6>
      </header>
      <section className='card-body'>{message}</section>
      <SyntaxHighlighter language={snippet.language} style={docco}>
        {snippet.code}
      </SyntaxHighlighter>
      <footer className='card-footer'>
        <IconButton icon='like' />
        <IconButton icon='star' />
        <IconButton icon='share' />
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
