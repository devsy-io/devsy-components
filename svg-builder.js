#!/usr/bin/env node
const fs = require('fs')
const glob = require('glob')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const config = {
  mode: {
    inline: true,
    symbol: true
  },
  svg: {
    xmlDeclaration: false
  }
}
const spriter = new SVGSpriter(config)

console.log('Compiling SVG Sprite')

glob('src/assets/svg/*.svg', {}, function (err, files) {
  if (err) return console.log(err)
  console.log('Files detected: ', files.length)

  files.forEach(function (file) {
    const filePath = path.join(process.cwd(), file)
    console.log(filePath)
    spriter.add(
      filePath,
      null,
      fs.readFileSync(filePath),
      {encoding: 'utf-8'}
    )
  })

  spriter.compile(function (err, result) {
    if (err) console.log(err)
    result.symbol.sprite.pipe(fs.createWriteStream('./src/IconSprite/sprite.svg'))
  })
})
