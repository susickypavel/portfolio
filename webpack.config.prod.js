const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "production",

    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader", "sass-loader"]
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Development build",
            template: "./src/index.ejs",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                keepClosingSlash: true
            },
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new Dotenv()
    ]
};