const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageConfig = require('../package.json');


const MARKETING_DOMAIN = process.env.MARKETING_DOMAIN;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const DASH_DOMAIN = process.env.DASH_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${MARKETING_DOMAIN}/remoteEntry.js`,
                auth: `auth@${AUTH_DOMAIN}/remoteEntry.js`,
                dash: `dashboard@${DASH_DOMAIN}/remoteEntry.js`
            },
            shared: packageConfig.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);