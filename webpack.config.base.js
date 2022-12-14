const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // name可以自行指定，指定格式为 index.[hash].js，不指定则默认为main
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'assets/model.html'
        }),
    ],
};



