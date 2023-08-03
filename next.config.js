/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
  @import "./src/styles/sassUtils/variables.scss";
  @import "./src/styles/sassUtils/helpers.scss";
  @import "./src/styles/sassUtils/query.scss";
  `,
  },
}

module.exports = nextConfig
