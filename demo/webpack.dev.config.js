const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          //如果编译的里面有react，那么需要配置presets
          presets: [
            'stage-0',
            [
              'env',
              {
                targets: {
                  //表示兼任主流浏览器最新两个版本即可
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './release'),
    open: true,
    port: 9000
  }
}
