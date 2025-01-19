/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config; // ✅ Fix: Return the updated config
  },
  reactStrictMode: true,
  // experimental: {
  //   appDir: true, // ❌ Fix: Remove or check if this is still valid
  // },
};

export default nextConfig;
