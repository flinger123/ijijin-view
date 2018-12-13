/*
 * vue config
 * @author: Micheal Wang
 * @info:
 *     2018-06-28: fund、trade -> trade
 */

const path = require('path');
const webpack = require('webpack');


module.exports = {
    //baseUrl: './',
    productionSourceMap: false,
    devServer: {
        port: '3000',
        proxy: {
            "/interface/*": {    //需要代理的路径
                target: "http://fund.10jqka.com.cn",  //需要代理的域名
                changeOrigin: true  //必须配置为true，才能正确代理
            }
        }
    },

    configureWebpack: config => {
        let plugins = [];
        if (process.env.NODE_ENV === 'production') { // prod
            plugins.push(new webpack.IgnorePlugin(/mock\/*/));    // ignore mock
        } else {    // dev
            // ...
        }
        return {
            output: {
                publicPath: './',
                filename: './js/[name].js',
                chunkFilename: './js/[name].js'
            },
            resolve: {
                alias: {
                    '~': path.resolve(__dirname, 'src'),
                    'mock': path.resolve(__dirname, 'src/mock'),
                    'lib': path.resolve(__dirname, 'src/lib'),
                    'style': path.resolve(__dirname, 'src/style'),
                    'script': path.resolve(__dirname, 'src/script')
                }
            },
            externals: {
                'vue': 'Vue',
                'vue-router': 'VueRouter',
                'axios': 'axios'
            },
            plugins
        }
    }
};