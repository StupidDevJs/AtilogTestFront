const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [
        // require.resolve('@babel/polyfill'),
        path.join(__dirname, '/src/index.jsx')
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index-bundle.js',
        publicPath: '/'
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: [
                    /node_modules/,
                    /\.unit\.test\.tsx?$/
                ],
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
        }),
        // new webpack.DefinePlugin({
        //   'process.env.API_URL': JSON.stringify(process.env.API_URL),
        //   // 'process.env.REACT_APP_ENV': JSON.stringify(process.env.REACT_APP_ENV),
        // //   'process.env.STRIPE_API_KEY': JSON.stringify(process.env.STRIPE_API_KEY)
        // }),
        new Dotenv(),
    ],
    devServer: {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        // },
        port: 3000,
        historyApiFallback: true,
    }
};