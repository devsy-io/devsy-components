import React from 'react'
import { Avatar, Card, IconSprite, Theme } from 'devsy-components'

const sample = [{
  fullname: 'Miguel Ángel',
  username: '@midudev',
  avatar: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  message: 'This is an example of tweet mesage talking about code.',
  snippet: {
    language: 'python',
    code: `def openFile(path):
    file = open(path, "r")
    content = file.read()
    file.close()
    return content`
  }
}, {
  fullname: 'Miguel Ángel',
  username: '@midudev',
  avatar: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  message: 'This is an example of tweet mesage talking about code.',
  snippet: {
    language: 'python',
    code: `def openFile(path):
    file = open(path, "r")
    content = file.read()
    file.close()
    return content`
  }
}, {
  fullname: 'Miguel Ángel',
  username: '@midudev',
  avatar: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  message: 'This is an example of tweet mesage talking about code.',
  snippet: {
    language: 'python',
    code: `def openFile(path):
    file = open(path, "r")
    content = file.read()
    file.close()
    return content`
  }
}, {
  fullname: 'Miguel Ángel',
  username: '@midudev',
  avatar: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  message: 'This is an example of tweet mesage talking about code.',
  snippet: {
    language: 'python',
    code: `def openFile(path):
    file = open(path, "r")
    content = file.read()
    file.close()
    return content`
  }
}]

export default () => {
  return (
    <Theme>
      <h4>Avatars</h4>
      <h5>wiht image</h5>
      <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg' size='xs' />
      <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg' size='s' />
      <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' size='m' />
      <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' size='l' />
      <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/esthercrawford/128.jpg' size='xl' />
      <h5>with initials</h5>
      <Avatar initials='WK' size='xs' />
      <Avatar initials='MD' size='s' />
      <Avatar initials='DC' size='m' />
      <Avatar initials='DA' size='l' />
      <Avatar initials='AZ' size='xl' />
      <h4>Cards</h4>
      {sample.map((tweet, index) => <Card {...tweet} key={index} />)}
      <IconSprite />
    </Theme>
  )
}
