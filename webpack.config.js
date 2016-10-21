var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('stylesheets/[name]-[id]-[hash].css');

module.exports = {
    entry: ['whatwg-fetch','./web/js/index.js'],
    devtool: 'source-map',
    cache: true,
    debug: true,
    output: {
        path: path.join(__dirname, './target/classes/static/content/'),
        filename: '[name]-[id]-[hash].js'
    },
    module: {
        preLoaders: [

        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }, {
                test: /\.json/,
                loaders: ['json-loader']
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader","postcss-loader")
            }
        ]
    },

    postcss: function () {
        return [require('autoprefixer')];
    },
    plugins: [
        extractCSS,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./web/index.tmpl.html")
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};