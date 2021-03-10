const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageConfig = require('../package.json');


const port = 8080;

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
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dash: 'dashboard@http://localhost:8083/remoteEntry.js'
            },
            shared: packageConfig.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);