const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: ['easy-rtp-parser.ts'],
    output: {
        path: resolve('dist'),
        filename: 'easy-rtp-parser.js',
        library: 'EasyRtpParser',
        libraryTarget: 'umd',
        umdNamedDefine: true        
    },
    resolve: {
        extensions: ['.ts'],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    plugins: [
        new webpack.WatchIgnorePlugin([
            /\.js$/,
            /\.d\.ts$/
        ])
    ],
    target: 'node',    
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true
    }
}