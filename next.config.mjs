/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Maksim calls the seven-principles page «ПТСР»; let that name work as a URL.
  async redirects() {
    return [
      { source: '/ptsd', destination: '/reboot', permanent: false },
      { source: '/ua/ptsd', destination: '/ua/reboot', permanent: false },
    ];
  },
};

export default nextConfig;
