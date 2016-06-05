import React from 'react'
import { Card } from 'devsy-components'

const sample = {
  fullname: 'Miguel Ángel',
  username: '@midudev',
  avatar: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  message: 'This is an example of tweet mesage talking about code.'
}

export default () => {
  return <Card {...sample} />
}
