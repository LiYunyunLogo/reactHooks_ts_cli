const HtmlWebpackPlugin = require('html-webpack-plugin');

//页面配置文件
// title:页面title
// filename:导出的文件名
// template: 模板路径
// entry:打包的页面
const pages = [
    {
        title:'react-index',
        filename:'index.html',
        pagename:'index',
        template:'./public/index.html',
        entry:"./src/pages/index.tsx"
    },
    {
        title:'11111-index',
        filename:'react.html',
        pagename:'react',
        template:'./public/index.html',
        entry:"./src/pages/index.tsx"
    },
    {
        title:'2222',
        filename:'react1.html',
        pagename:'react1',
        template:'./public/index.html',
        entry:"./src/pages/index.tsx"
    },
]
// 多页面打包配置导出
module.exports = {
    entrys:  Object.assign(...pages.map(i =>{ return {[i.pagename]:i.entry}})),
    pages: pages.map(i => {
        const obj = Object.assign({},i)
        delete obj.entry
        delete obj.pagename
        return new HtmlWebpackPlugin({...obj,hash:true})
})}