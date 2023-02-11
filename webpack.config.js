const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

  entry: {
    main: {
      import: path.resolve(__dirname,'src/assets/js/main.js'),
      dependOn: ['shared','library','classes'],
    },
    comments: {
      import: path.resolve(__dirname,'src/assets/js/modules/comments.js'),
      dependOn: ['shared','library','classes'],
    },

    shared: ['lodash','axios','bootstrap'],

    library: [
      path.resolve(__dirname,'src/assets/js/modules/library/news-function-library.js'), 
      path.resolve(__dirname,'src/assets/js/modules/library/functions-library.js'),
    ],

    classes: [
      path.resolve(__dirname,'src/assets/js/modules/classes/notice.js'),
      path.resolve(__dirname,'src/assets/js/modules/classes/comment.js'),
    ],
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
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
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
        test: /\.(js|jsx)$/i,			
        exclude: /node_modules/,
      
        use : {
                  loader : 'babel-loader',
                  options : {
                      presets : [ '@babel/preset-env' ]
                  }
              }
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