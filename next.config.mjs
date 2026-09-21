/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Maksim calls the seven-principles page «ПТСР»; let that name work as a URL.
  async redirects() {
    return [
      // The Кузня moved from /forge to the root (2026-09-21); old links hold.
      { source: '/forge', destination: '/', permanent: true },
      { source: '/ua/forge', destination: '/ua', permanent: true },
      { source: '/ptsd', destination: '/reboot', permanent: false },
      { source: '/ua/ptsd', destination: '/ua/reboot', permanent: false },
    ];
  },
};

export default nextConfig;
