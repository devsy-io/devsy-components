import {join} from 'path'
import {HotModuleReplacementPlugin} from 'webpack'

var SRC_PATH = join(__dirname, '/src')
var APP_PATH = join(__dirname, '/examples')

module.exports = {
  context: APP_PATH,
  entry: './',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist'
  },
  resolve: {
    alias: {
      'devsy-components': SRC_PATH
    },
    extensions: ['', '.js', '.scss', '.svg']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: [APP_PATH, SRC_PATH]
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: [APP_PATH, SRC_PATH]
    }, {
      test: /\.svg$/,
      loaders: ['svg-inline'],
      include: [APP_PATH, SRC_PATH]
    }]
  },
  devServer: {
    port: 3000,
    stats: { colors: true },
    inline: true,
    publicPath: '/dist/'
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
}
