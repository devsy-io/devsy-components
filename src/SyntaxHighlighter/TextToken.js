import React from 'react'

export default function TextToken ({token}) {
  return React.createElement('span', {}, token.value)
}
