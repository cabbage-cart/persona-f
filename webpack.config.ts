import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import TerserPlugin from 'terser-webpack-plugin';
import path from 'path';

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config = {
  mode,
  entry: {
    persona: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
    publicPath: '',
  },
  devServer: {
    writeToDisk: true,
    watchContentBase: true,
    contentBase: path.resolve(__dirname, './dist'),
    index: 'persona.html', // default index.html
    port: 8000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // optimize all chunks
      minSize: 3000, // set minSize to 3000 so react is included
    },
    // minimize: true,
    // minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          { loader: 'sass-loader' },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].styles.css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/page-template.hbs',
      filename: 'persona.html',
      inject: 'body',
      title: 'Persona Flare',
      description: 'Persona Flare App',
      chunks: ['persona'],
    }),
  ],
  devtool: 'source-map',
};

module.exports = config;
