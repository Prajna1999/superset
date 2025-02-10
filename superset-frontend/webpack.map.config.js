// superset-frontend/webpack.map.config.js
const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    entry: {
        map: path.join(__dirname, '/src/bangkok-map/index.tsx'),
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
    }
});