/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "https://nadeeshasumanasekara.github.io/my-portfolio";

const nextConfig = {
  assetPrefix: isProd ? `./` : "",
  basePath: isProd ? `/${repoName}` : "",
  trailingSlash: true, // Ensures proper static site behavior
  images: {
    unoptimized: true, // Required for static exports with GitHub Pages
  },
};

module.exports = nextConfig;
