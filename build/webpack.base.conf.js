var path = require('path')
var utils = require('./utils')
var config = require('../config')
function resolve(dir) {
    return path.join(__dirname,'..',dir)
}
module.exports = {
    entry:{
        app:'./src/main.js'
    },
    output:{
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve:{
        extensions:['.js'],
        alias:{
            '@':resolve('src')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:[resolve('src')]
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}