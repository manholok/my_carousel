const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = function (env) {
    return {
        context: __dirname + '/src/',
        devtool: 'source-map',
        entry: [
            'babel-polyfill',
            './app.js'
        ],
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: [/node_modules/],
                    options: {
                        presets: [
                            [
                                'env', {
                                    targets: {
                                        browsers: 'last 2 versions'
                                    }
                                }
                            ]
                        ]
                    }
                },
                {
                    test: /\.(png|jpg|jpeg)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/'
                    }
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader'
                            }
                        ]
                    })
                }
            ]
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: __dirname + '/dist/'
        },
        plugins: [
            new ExtractTextWebpackPlugin({
                filename: 'style/style.css'
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: 'index.html'
            }),
            new Webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            })
        ]
    }
};