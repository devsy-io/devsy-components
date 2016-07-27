import React from 'react'

export default function HighlightedToken ({token}) {
  return React.createElement(token.tagName, {
    className: token.properties.className.join(' ')
  },
  token.children.map(c => c.value).join(''))
}
