const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./ts/main.ts",
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [{
            test: /\.tsc?$/,
            use: 'ts-loader',
            exclude:/node_modules/
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test:/\.(png|jpe?g|gif)$/,
            use:[
                {
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:"./images/",
                        publicPath:'images/',
                        userRelativePaths:true
                    }
                }
            ]
        },
        {
            test:/\.(mp3)$/,
            use:[
                {
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:"./mp3/",
                        publicPath:'mp3/',
                        userRelativePaths:true
                    }
                }
            ]
        }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, 'final')
    },
    devServer: {
        contentBase: path.join(__dirname,'final'),
        port: 8080,
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body'
    })]
}