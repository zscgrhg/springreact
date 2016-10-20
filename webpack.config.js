var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('stylesheets/[name]-[id]-[hash].css');

module.exports = {
    entry: './src/main/web/js/app.js',
    devtool: 'eval',
    cache: true,
    debug: true,
    output: {
        path: path.join(__dirname, './src/main/resources/static/content/'),
        filename: '[name]-[id]-[hash].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.css$/,
                loader: 'stripcomment'
            }
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }, {
                test: /\.json/,
                loaders: ['json-loader']
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules","postcss-loader")
            }
        ]
    },

    postcss: function () {
        return [require('autoprefixer')];
    },
    plugins: [
        extractCSS,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/main/web/index.tmpl.html")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};