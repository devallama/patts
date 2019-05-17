const path = require('path');

const CONFIG = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: './[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.md$/,
                use: 'raw-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        // alias: {}
    },
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        hot: true,
        inline: true,
        historyApiFallback: true
    }
}

module.exports = CONFIG;