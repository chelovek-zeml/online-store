const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
  },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.json', '.png'],
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'main.html',
    }),
    new CleanWebpackPlugin(),
  ],
};