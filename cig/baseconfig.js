
const path=require('path')
const webpack=require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
/* const uglifyJsWebpackPlugin=require('uglifyjs-webpack-plugin') */
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'bunlder.js',
    publicPath:'build/'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name:'images/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
  /*     {
        loader: 'file-loader',
        options: {
          
        }
      } */
    ]
  },
  resolve:{
    alias:{
      cc:'../src/ccc.css'
    }
  },
  plugins:[
new webpack.BannerPlugin('张伟的第二哥webpack测试'),
new htmlWebpackPlugin({
  template:'index.html'
}),
/* new uglifyJsWebpackPlugin() */
  ],
/*   devServer:{
    contentBase:'./build',
    inline:true,
    port:9500
  } */
}