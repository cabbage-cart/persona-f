import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
 mode,
 entry: {
  persona: './src/index.tsx',
 },
 output: {
  path: path.resolve(__dirname, 'dist/'),
  filename: '[name].bundle.js',
  publicPath: '/',
 },
 devServer: {
  inline: true,
  compress: true,
  contentBase: path.join(__dirname, 'dist'),
  port: 8001,
 },
 module: {
  rules: [
   {
    test: /\.(s[ac]|c)ss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
   },
   {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
   },
   {
    test: /\.tsx$/,
    exclude: /node_modules/,
    use: {
     loader: 'ts-loader',
    },
   },
   {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
     {
      loader: 'file-loader',
     },
    ],
   },
  ],
 },
 resolve: {
  extensions: ['.ts', '.js', '.tsx', '.jsx'],
 },
 plugins: [
  new MiniCssExtractPlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   template: './src/index.html',
   filename: 'index.html',
   inject: 'body',
  }),
 ],
 devtool: 'source-map',
};
