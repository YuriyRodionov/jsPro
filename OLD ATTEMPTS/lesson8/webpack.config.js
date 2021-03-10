const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    
            entry: 
              './forTest.js'
            ,
            output: {
                filename: 'main.js',
                path: path.resolve('./build'),
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                      },

                    {
                        test: /\.js$/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env'],
                                },
                            },
                        ],
                        exclude: /node_modules/,
                    },

                    {
                        test: /\.css$/,
                        use: [
                          'vue-style-loader',
                          'css-loader'
          
                        ]
                      },
                      {
                        test: /\.scss$/,
                        use: [
                          'vue-style-loader',
                          'css-loader',
                          'sass-loader'
                        ]
                      },
                      {
                        test: /\.svg$/,
                        use: 'file-loader'
                      },
                      
                      {
                        test: /\.(png|jpe?g|gif)$/,
                        use: 'url-loader'
                      },
                    ]
                  },
                  resolve: {
                    
                    alias: {
                      'vue$': 'vue/dist/vue.esm.js'
                  },
                  extensions: ['.js', '.vue', '.json']
                    
                  },
                  plugins: [
                    new VueLoaderPlugin(),
                    new HtmlWebpackPlugin({
                      template: path.resolve(__dirname, "index.html")
                    }),
                    
                    new MiniCssExtractPlugin(),
                   
                  ],
            devServer: {
                contentBase: './build',
                inline: false,
            }
        }
        
    
       