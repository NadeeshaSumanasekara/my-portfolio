/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "my-portfolio";

const nextConfig = {
  output: "export", // Use static site generation
  assetPrefix: isProd ? `./` : "",
  basePath: isProd ? `/${repoName}` : "",
  trailingSlash: true, // Ensures proper static site behavior
  images: {
    unoptimized: true, // Required for static exports with GitHub Pages
  },
};

module.exports = nextConfig;
