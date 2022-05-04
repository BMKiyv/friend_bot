const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {

    const indexRu = new HtmlWebPackPlugin({
        template: './src/static/ru/index.html',
        filename: './ru/index.html',
    });

    config.plugins = [...config.plugins, indexRu];
    if (env === 'production') {
    }

    return config;
};