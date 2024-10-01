import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/main.html',
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'contacts.html',
    //   template: './src/pages/contacts.html',
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'portfolio.html',
    //   template: './src/pages/portfolio.html',
    // }),
  ],
  output: {
    clean: true,
  },
};
