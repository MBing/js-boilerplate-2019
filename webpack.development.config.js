const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: [
            path.join(__dirname, 'public'),
            path.join(__dirname, 'dist'),
        ],
        hot: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
