/** @type {import('next').NextConfig} */

import withVideos from "next-videos";

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

export default withVideos(nextConfig);
