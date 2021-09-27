const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      services: path.resolve(__dirname, "src/services"),
      state: path.resolve(__dirname, "src/state"),
      utils: path.resolve(__dirname, "src/utils"),
      pages: path.resolve(__dirname, "src/pages"),
      modules: path.resolve(__dirname, "src/modules"),
    },
  };
  return config;
};
