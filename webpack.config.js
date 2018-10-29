const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "development",

    entry: "./src/index.tsx",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: "tslint-loader"
            },
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

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        stats: "errors-only",
        port: 8080,
        compress: true,
        open: true,
        historyApiFallback: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Development build",
            template: "./src/index.ejs"
        }),
        new Dotenv()
    ]
};