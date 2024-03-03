/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
    ],
  },
};

export default nextConfig;
