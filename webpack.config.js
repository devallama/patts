const path = require('path');

const CONFIG = {
    entry: {
        app: './patterns/index.js'
    },
    output: {
        filename: './dist/[name].js'
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
        alias: {
            patts: path.join(__dirname, '/src/index')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        hot: true,
        inline: true,
        historyApiFallback: true
    }
}

module.exports = CONFIG;