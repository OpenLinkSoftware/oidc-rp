const path = require('path')

module.exports = {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'oidc.rp.min.js',
    library: 'OIDC',
    libraryTarget: 'var'
  },
  module: {
  },
  externals: {
    'node-fetch': 'fetch',
    '@sinonjs/text-encoding': 'TextEncoder',
    'whatwg-url': 'window',
    'isomorphic-webcrypto': 'crypto'
  },
  resolve: {
    fallback: {
      "assert": require.resolve("assert/")
    }
  },
  devtool: 'source-map'
}
