import { resolve as _resolve, join, dirname } from "path";
import { fileURLToPath } from "url";

// Manually define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: _resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: join(__dirname, "public"),
    port: 3000,
    open: false, // Automatically open the browser if `true`
    hot: true, // Enable hot module replacement feature
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
};
