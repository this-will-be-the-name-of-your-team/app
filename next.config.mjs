/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff2)$/i,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};

export default nextConfig;
