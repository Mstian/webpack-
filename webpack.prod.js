
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpachPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        index:"./src/index.js",
        admin:"./src/admin.js"
    },
    output:{
        path:path.join(__dirname,"dist"),
        filename:"[name]_[chunkhash:8].js"
    },
    mode:"production",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader"
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(otf|woff|eot|ttf|woff2)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name]_[hash:8].[ext]"
                    }
                }
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"[name]_[hash:8].[ext]",
                        limit:10240
                    }
                }
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name]_[contenthash:8].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcsssor:require("cssnano")
        }),
        new HtmlWebpachPlugin({
            template:path.join(__dirname,'src/aaa.html'),
            filename:"aaa.html",
            chunks:["admin"], //html 使用哪些chunk
            inject:true, // 自动注入
            minify:{
                html5:true,
                collapseWhitespace:true,
                preserveLineBreaks:false,
                minifyCSS:true,
                minifyJS:true,
                removeComments:false
            }
        }),
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
    ]
}