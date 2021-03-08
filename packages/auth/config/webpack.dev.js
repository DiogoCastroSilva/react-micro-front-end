const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageConfig = require('../package.json');

const port = 8082;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${port}/`
    },
    devServer: {
        port: port,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/bootstrap'
            },
            shared: packageConfig.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);