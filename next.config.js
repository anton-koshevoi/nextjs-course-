/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  const defaultConfig = { reactStrictMode: true, swcMinify: true };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      env: {
        mongodb_username: "Anton",
        mongodb_password: "KVmWFatk3vUddgdj",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    ...defaultConfig,
    env: {
      mongodb_username: "Anton",
      mongodb_password: "KVmWFatk3vUddgdj",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
