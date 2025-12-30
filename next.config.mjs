/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://beta.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://www.googletagmanager.com https://go.dallaswindowbutler.com",
              "connect-src 'self' https://beta.leadconnectorhq.com https://services.leadconnectorhq.com https://services.msgsndr.com",
              "frame-src 'self' https://beta.leadconnectorhq.com https://services.leadconnectorhq.com https://go.dallaswindowbutler.com",
              "img-src 'self' data: https:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net https://stcdn.leadconnectorhq.com",
              "font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
