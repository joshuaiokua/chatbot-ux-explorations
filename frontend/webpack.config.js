import { resolve as _resolve, join } from 'path';

export const entry = './src/index.tsx';
export const output = {
  filename: 'bundle.js',
  path: _resolve(__dirname, 'dist')
};
export const mode = 'development';
export const devServer = {
  static: join(__dirname, 'public'),
  port: 3000,
  open: true // Automatically open the browser
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }
  ]
};
export const resolve = {
  extensions: ['.tsx', '.ts', '.js', '.jsx']
};
