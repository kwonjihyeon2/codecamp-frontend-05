/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "codecamp-deploy",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
