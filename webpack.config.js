const { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const corePlugins = [
    new CheckerPlugin(),
    new webpack.DefinePlugin({
        "process.env.NODE-ENV": JSON.stringify(process.env.NODE_ENV || "development")
    }),
    new MiniCssExtractPlugin({
        filename: "[name]main.css",
        allChunks: true
    })
];

const devPlugins = [];

const prodPlugins = [];

const isProduction = process.env.NODE_ENV === "production";
const plugins = isProduction ? corePlugins.concat(prodPlugins) : corePlugins.concat(devPlugins);
const mode = isProduction ? "production" : "development";

module.exports = {
    mode: mode,
    entry: {
        "calculator_app/": "./src/main_browser.ts"
    },
    devServer: {
        inline: true
    },
    output: {
        filename: "[name]bundle.js",
        path: __dirname + "/public",
        publicPath: "/public"
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    resolve: {
        extensions: [".webpack.js", ".ts", ".tsx", ".js"],
        plugins: [
            new TsConfigPathsPlugin({configFileName: "tsconfig.json"})
        ]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: plugins
};