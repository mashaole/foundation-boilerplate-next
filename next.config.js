module.exports = {
  reactStrictMode: true,
  env: {
    VARIABLE1: process.env.NEXT_PUBLIC_VARIABLE1,
    VARIABLE2: process.env.NEXT_PUBLIC_VARIABLE2,
  },
  distDir: "build",
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
};
