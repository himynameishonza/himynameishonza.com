// next.config.js
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const nextConfig = {
  webpack: (config) => {
    config.node = {
      fs: "empty",
      modules: false,
    };

    return config;
  },
};

module.exports = withPlugins(
  [
    withCSS,
    withSass({
      cssModules: true,
    }),
  ],
);
