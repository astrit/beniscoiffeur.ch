/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/review",
        destination: "https://g.page/r/CcD7xCeijHu1EBM/review",
        permanent: true,
      },
      {
        source: "/map",
        destination: "https://maps.app.goo.gl/ErXw88gMLuoZrwfw9",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "random.unsplash.com",
      "github.com",
      "avatars.githubusercontent.com",
    ],
    formats: ["image/webp"],
  },
  // output: "export",
}

module.exports = nextConfig
