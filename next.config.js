/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: require("path").join(__dirname),
  // images: {
  //   domains: [
  //     "images.unsplash.com",
  //     "cdn.pixabay.com",
  //     "images.pexel.com",
  //     "source.unsplash.com",
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
