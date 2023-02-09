const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: {
      import: './src/assets/js/main.js',
      dependOn: 'shared',
    },
    comment: {
      import: './src/assets/js/modules/comment.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Get the news',
      template: './src/index.html',
    }),
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],

        generator : { 
          filename : '[name].[contenthash].[ext]',	
          outputPath : 'assets/css',	
          publicPath : './src/assets/css',	
        }    

      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

        generator : { 
          filename : '[name].[contenthash].[ext]',	
          outputPath : 'assets/img',	
          publicPath : './src/assets/img',	
        }   
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};