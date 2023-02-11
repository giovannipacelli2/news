const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: {
    main: {
      import: path.resolve(__dirname,'src/assets/js/main.js'),
    },
    /* comment: {
      import: path.resolve(__dirname,'src/assets/js/modules/comments.js'),
    }, */
  },

  devtool: 'inline-source-map',

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Get the news',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
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
          outputPath : 'assets/img/',	
          publicPath : 'assets/img/',	
        }   
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.html$/i,				
        use : [ 'html-loader' ],
      }
      

    ],
  },
  experiments: {
    topLevelAwait: true
  }

};