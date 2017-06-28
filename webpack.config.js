var path = require('path');
var ip = require('ip');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:  './dist/',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    // devserver 配置
    devServer: {
        host: ip.address() || '0.0.0.0',
        port: 88,
        hot: true,
        clientLogLevel: 'warning',
        historyApiFallback: true,
        disableHostCheck: true,
        //未经webpack处理的文件路径
        //未经如 react react-router等lib库中的文件
        contentBase: './',
        //webpack输出文件的路径 如 http://localhost:8080/Transaction/Ordinary/css/buy.css
        //注意 这里需要用绝对路径
        // path:/a 访问 http://localhost/a
        // path:/a/b/v 访问 http://localhost/a/b/v
        publicPath: '/dist',
    }
};
