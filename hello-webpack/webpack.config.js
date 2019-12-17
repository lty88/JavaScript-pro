// 1. 引入模块
const path = require('path');
const webpack = require('webpack');
// -> 处理Html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// -> 抽离css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// -> 消除未使用的css
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
// -> 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 2. 导出配置
module.exports = {
    // 配置基础路径为当前目录（默认为配置文件所在的当前目录）
    context: path.resolve(__dirname, './'),
    // 打包模式 development - 未压缩 | production - 压缩
    mode: 'development',
    // 入口 string | array | object
    entry: {
        main: './src/js/index.js'
    },
    // 出口
    output: {
        // 输出目录/绝对路径
        path: path.resolve(__dirname, './dist/'),
        // 输出文件名
        filename: 'static/js/[name]-bundle.js'
    },
    // 加载器
    module: {
        rules: [
            // 编译es语法
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            // 编译less
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    // "style-loader",
                    // => 使用插件中的loader代替style方式
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            reloadAll: true
                        }
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [require("autoprefixer")]
                        }
                    },
                    "less-loader"]
            }
        ]
    },
    // 插件
    plugins: [
        // -> 热替换
        new webpack.HotModuleReplacementPlugin(),
        // -> 抽离CSS文件
        new MiniCssExtractPlugin({ filename: "static/css/[name].css" }),
        // -> 消除未使用的css
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, "./src/**/*.html")),
        }),
        // -> 压缩css
        new OptimizeCSSAssetsPlugin({
            // 默认是全部的CSS都压缩，该字段可以指定某些要处理的文件
            assetNameRegExp: /\.(sa|sc|c|le)ss$/g,
            // 指定一个优化css的处理器，默认cssnano
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: { removeAll: true }, // 对注释的处理
                    normalizeUnicode: false // 建议false,否则在使用unicode-range的时候会产生乱码
                }]
            },
            canPrint: true  // 是否打印编译过程中的日志
        }),
        // —> 处理html
        new HtmlWebpackPlugin({
            // 模板文件
            template: "./src/index.html",
            // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
            filename: "index.html",
            // 静态资源位置
            inject: "body",
            // 指定输出文件所依赖的入口文件（*.js）的[name]
            chunks: ["main"],
            // 控制压缩
            minify: {
                collapseWhitespace: false,
                removeComments: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true
            }
        }),
    ],
    // 开发服务
    devServer: {
        contentBase: path.resolve(__dirname, "./dist/"),
        host: "127.0.0.1",
        port: 8090,
        open: true,
        inline: true,
        hot: true // 热替换
    }
};

