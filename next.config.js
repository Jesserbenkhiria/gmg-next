/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config'); // Import the i18n configuration

const nextConfig = {
  reactStrictMode: false, // You can set this to true for stricter React checks
  swcMinify: true,        // Keeps minification enabled for better performance
  i18n,        
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Prevent fs from being bundled in client-side code
    return config;
  },           // Include the i18n settings
};

module.exports = nextConfig;
