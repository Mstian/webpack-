
const path = require("path");
const webpack = require("webpack");
const HtmlWebpachPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        index:"./src/index.js",
        admin:"./src/admin.js"
    },
    output:{
        path:path.join(__dirname,"dist"),
        filename:"[name].js"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(otf|woff|eot|ttf|woff2)$/,
                use:"file-loader"
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:10240
                    }
                }
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpachPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:"index.html",
            chunks:["index"], //html 使用哪些chunk
            inject:true, // 自动注入
            minify:{
                html5:true,
                collapseWhitespace:true,
                preserveLineBreaks:false,
                minifyCSS:true,
                minifyJS:true,
                removeComments:false
            }
        })
    ],
    devServer:{
        contentBase:'./dist',
        hot:true,
        open:true,
        port:3000
    }
}