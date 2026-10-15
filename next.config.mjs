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
      // Отдельная страница «Перезагрузка» убрана 15.10.2026: программа живёт
      // внутри клуба. Ссылки на неё остались в переписках и у тех, кто её
      // сохранял, поэтому ведём их на главную, а не в 404.
      { source: '/reboot', destination: '/', permanent: false },
      { source: '/reboot/program', destination: '/', permanent: false },
      { source: '/ua/reboot', destination: '/ua', permanent: false },
      { source: '/ua/reboot/program', destination: '/ua', permanent: false },
      { source: '/ptsd', destination: '/', permanent: false },
      { source: '/ua/ptsd', destination: '/ua', permanent: false },
    ];
  },
};

export default nextConfig;
