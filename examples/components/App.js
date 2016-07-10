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
      <Avatar size='xs' />
      <Avatar size='s' />
      <Avatar size='m' />
      <Avatar size='l' />
      <Avatar size='xl' />
      <h4>Cards</h4>
      {sample.map((tweet, index) => <Card {...tweet} key={index} />)}
      <IconSprite />
    </Theme>
  )
}
