let webpackMerge=require('webpack-merge')
let uglifyJsWebpackPlugin=require('uglifyjs-webpack-plugin')
let baseconfig=require('./baseconfig')
module.exports=webpackMerge.merge({
  plugins:[
   new uglifyJsWebpackPlugin()
  ]
 },baseconfig)