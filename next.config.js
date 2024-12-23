const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    return config;
  },
  images: {
    domains: [
      'management.nottheuniversity.com',
      '118.27.25.166',
      'localhost',
      'about.nottheuniversity.com',
      'management-offers.nottheuniversity.com',
    ],
    disableStaticImages: true, // importした画像の型定義設定を無効にする
    // unoptimized: true,
  },
});
