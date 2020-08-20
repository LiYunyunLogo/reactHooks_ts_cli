const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pages =  require("../pages.config")
const webpack =  require("webpack")
const {merge}  = require('webpack-merge')
const base = require('./webpack.base')

const defineConf = {
    // 插件配置
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "source-map",
    devServer:{
      contentBase: path.resolve(__dirname, "dist"), //本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
      open:true,
      port:9090,
      hot: true
    },
    //配置自带插件--watch的刷新频率
    watchOptions: {
      poll: 1000,//监测修改的时间(ms)
      aggregateTimeout: 500,//防止重复按键，500毫秒内算按一次
      ignored: /node_modules/,//不监测
    },
    
}
module.exports = merge(base,defineConf)