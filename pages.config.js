const HtmlWebpackPlugin = require('html-webpack-plugin');

//页面配置文件
// title:页面title
// filename:导出的文件名
// template: 模板路径
const pages = [
    {
        title:'react-index',
        filename:'index.html',
        template:'./public/index.html'
    },
    {
        title:'11111-index',
        filename:'react.html',
        template:'./public/index.html'
    },
]

// 多页面打包配置导出
module.exports = pages.map(i => {
        return new HtmlWebpackPlugin({...i,hash:true})
})