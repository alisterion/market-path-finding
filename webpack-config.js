const path = require('path');

module.exports = {
    entry: './src/index.js',
    plugins: [
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
