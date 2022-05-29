const presets = ["@babel/preset-env", "@babel/preset-react"];

const plugins = [
  ["react-hot-loader/babel"],
  ["@babel/plugin-transform-runtime"],
  ["@babel/plugin-proposal-class-properties"],
  ["@babel/plugin-syntax-object-rest-spread"],
];

module.exports = { presets, plugins };
