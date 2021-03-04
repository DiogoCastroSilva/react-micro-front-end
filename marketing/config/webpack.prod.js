const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const packageConfig = require('../package.json');
const commonConfig = require('./webpack.common');


const devConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/bootstrap'
            },
            shared: packageConfig.dependencies
        }),
    ]
};


module.exports = merge(commonConfig, devConfig);