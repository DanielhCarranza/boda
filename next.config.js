/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    AIRTABLE_API_KEY: process.env['AIRTABLE_API_KEY']
  },
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
