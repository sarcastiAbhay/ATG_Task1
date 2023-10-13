/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_baseurl: "http://localhost:3000",
    MONGO_URI: "mongodb://localhost:27017/atg",
    AES_SECRET: "hehe1231122883thisis2o92893os98273910049705lksdljlaesscret",
    JWT_SECRET: "retthisisjwtsc1122883lksjdlfjsdldjkflsdjflsaja11398hehe123"
  },
}

module.exports = nextConfig
