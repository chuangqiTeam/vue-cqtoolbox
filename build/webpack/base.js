import path from 'path';
import webpack from 'webpack';
import eslintFormatter from 'eslint-friendly-formatter';
import config from '../config';

const resolvePath = (dir) => {
  return path.resolve(__dirname, '..', '..', dir);
};

export default {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.rootPath,
    publicPath: config.publicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      assets: resolvePath('src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolvePath('build'),
          resolvePath('src'),
          resolvePath('lib')
        ],
        options: {
          fix: true,
          formatter: eslintFormatter
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolvePath('build'),
          resolvePath('src'),
          resolvePath('lib')
        ]
      },
      {
        test: /\.theme$/,
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '/assets/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env
    })
  ]
};
