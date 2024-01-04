/** @type {import('next').NextConfig} */
// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/, // 处理 .md 和 .mdx 文件
//   });
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    webpack: (config) => {
        config.resolve.extensionAlias = {
            ".js": [".ts", ".tsx", ".js", ".jsx", '.d.ts'],
            ".mjs": [".mts", ".mjs"],
            ".cjs": [".cts", ".cjs"],

        };

        config.module.rules.push({
            test: /\.md$/,
            // This is the asset module.
            type: "asset/source",
          })
        return config;
    },
    transpilePackages: ['@zctc/edms-lrs-oauth1.0', '@zctc/edms-oauth2.0-npm']
}

module.exports = nextConfig
// module.exports = withMDX({
//     ...nextConfig,
//     pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
//   });