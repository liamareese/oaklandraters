// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Example: Add a basePath if your app is not at the root
  // basePath: '/your-app-base-path',
};

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
// Converted from import to require for CommonJS compatibility in next.config.js
const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');
initOpenNextCloudflareForDev();

module.exports = nextConfig;
