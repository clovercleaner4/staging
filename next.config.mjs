const nextConfig = {
  output: 'export',
  basePath: '/staging',
  assetPrefix: '/staging',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: false,
};
export default nextConfig;
