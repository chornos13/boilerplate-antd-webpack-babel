const path = require('path')
const HWP = require('html-webpack-plugin')
const CWP = require('copy-webpack-plugin')
const webpack = require('webpack')
const theme = require('./src/styles/theme')

module.exports = (env, argv) => {
  const isDevelopmentMode = argv.mode === 'development'
  return {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: 2345,
      overlay: {
        errors: true,
        warnings: true,
      }, // show error page
      historyApiFallback: true,
    },
    entry: path.join(__dirname, '/src/index.js'),
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1]

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            },
          },
        },
      },
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: theme,
                javascriptEnabled: true,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['/src/'],
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: isDevelopmentMode
                  ? {
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  }
                  : true,
              },
            },
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.(eot|gif|otf|png|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HWP({ template: path.join(__dirname, '/src/index.html') }),
      new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
      new CWP([{ from: 'public', to: 'public' }]),
    ],
  }
}
