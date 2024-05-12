const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    skipTrailingSlashRedirect: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    compress: false,
    devIndicators: {
        buildActivity: false,
    },
    env: {
        nextCustomKey: process.env.NEXT_CUSTOM_KEY
    },
    experimental: {
        mdxRs: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
}

module.exports = withMDX(nextConfig);
