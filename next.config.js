/** @type {import('next').NextConfig} */
//images에 domian을 추가해야 Image 컴포넌트 쓸 때 에러 안남
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imagedelivery.net"],
  },
};

module.exports = nextConfig;
