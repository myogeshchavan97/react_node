const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = (env) => {
    console.log(env);
    return {
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public')
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: path.join(__dirname, 'public')
                    },
                  }, 'css-loader'
                ],
                test: /\.css/
            }]
        },
        mode: env ? 'production' : 'development',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'main.css',
                chunkFilename: 'main.css',
            }),
        ]
    };
};