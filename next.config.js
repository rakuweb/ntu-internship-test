module.exports = {
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
    domains: ['management.nottheuniversity.com'],
    disableStaticImages: true, // importした画像の型定義設定を無効にする
  },
};
