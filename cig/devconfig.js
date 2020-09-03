const { module } = require("../webpack.config");

let webpackMerge=require('webpack-merge');
let baseconfig=require('./baseconfig')
module.exports=webpackMerge.merge(baseconfig,{
  devServer:{
    contentBase:'./build',
    inline:true,
    port:9500
}})