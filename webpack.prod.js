const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const defaultConfig = merge(common, {
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    mode: "production",
    devtool: "source-map"
});

const ghPagesConfig = {
    ...defaultConfig,
    entry: "./src/index.js",
    output: {
        ...defaultConfig.output,
        path: path.resolve(__dirname, "docs"),
        publicPath: "/css-loaders"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: "Webpack 4 Starter",
            template: "./src/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            base: { href: "http://example.com/some/page.html" }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
            ignoreOrder: false // Enable to remove warnings about conflicting order
        })
    ]
};

console.log("ghDocsConfig", ghPagesConfig);

module.exports = [defaultConfig, ghPagesConfig];
