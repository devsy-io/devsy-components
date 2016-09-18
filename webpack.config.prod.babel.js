
import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: path.resolve(__dirname, 'src'),
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      exclude: /node_modules/
    }]
  },
  exterals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.min.js',
    library: 'devsy-components',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('index.min.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
}
