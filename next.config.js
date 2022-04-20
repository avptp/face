/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
  },
};
