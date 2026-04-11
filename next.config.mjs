/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
        port: '',
        pathname: '/**',
        search: '',
      }
    ],
  },
};

export default nextConfig;
