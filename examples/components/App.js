import React from 'react'
import { Card, Theme } from 'devsy-components'

const sample = [{
  fullname: 'Miguel Ángel',
  username: '@midudev',
  avatar: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  message: 'This is an example of tweet mesage talking about code.',
  snippet: {
    language: 'javascript',
    code: 'const suma = (a, b) => a + b'
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
      {sample.map((tweet, index) => <Card {...tweet} key={index} />)}
    </Theme>
  )
}
