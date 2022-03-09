/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "example-deploy-5",
  // slash기준 폴더 안에 파일을 생성
  exportPathMap: () => ({
    //static site 주소 입력
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
