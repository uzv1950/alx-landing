// @ts-check

const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production',
  swcMinify: true,
  i18n,
  generateBuildId: async () =>
    process.env.BUILD_ID ? process.env.BUILD_ID : `altabix-landing-${new Date().getTime()}`,
  distDir: '.next'
};

module.exports = nextConfig;
