const path = require('path');

module.exports = {
  entry: './src/main.js', // Twój plik wejściowy
  output: {
    filename: 'bundle.js', // Wyjściowy plik JavaScript
    path: path.resolve(__dirname, 'dist') // Ścieżka do folderu z plikami wyjściowymi
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Pasuje do plików .css
        use: [
          'style-loader', // Wstawia style do DOM jako elementy <style>
          'css-loader' // Przetwarza pliki CSS
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css']
  }
};