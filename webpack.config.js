const path = require('path');

module.exports = {
  entry: './public/javascripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  }
};
