/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ShobuSphere',
    description: 'ShobuPrime\'s List of Kasm Workspaces.',
    icon: 'https://shobuprime.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://shobuprime.github.io/kasm-registry/',
    contactUrl: 'https://github.com/ShobuPrime/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
