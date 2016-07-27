import React from 'react'
import lowlight from 'lowlight'
import HighlightedToken from './HighlightedToken'
import TextToken from './TextToken'

export default function SyntaxHighlighter ({language, snippet, style}) {
  const abstractSyntaxTree = lowlight.highlight(language, snippet)

  if (!abstractSyntaxTree.value.length) {
    return snippet
  }

  const highlightedCode = abstractSyntaxTree.value
    .map((token, index) =>
      (token.type === 'element') ? <HighlightedToken token={token} key={index} />
                                 : <TextToken token={token} key={index} />
    )

  return (
    <code>
      {highlightedCode}
    </code>
  )
}
