/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      }
    ];
  },
  // Enable React strict mode for improved development experience
  reactStrictMode: true,
  // Enable experimental features (optional)
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    scrollRestoration: true, // Enable scroll restoration
  },
  // Configure redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/signup.php',
        destination: 'https://ie.infradexedu.in/signup.php',
        permanent: true,
      },
    ];
  },
  // Configure rewrites for API endpoints (if needed)
  async rewrites() {
    return {
      beforeFiles: [
        // Add any rewrites here
      ],
    };
  },
  // Optimize builds
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // Handle specific page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],
};

module.exports = nextConfig;
