/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    },
    experimental: {
        serverComponentsExternalPackages: ['mongoose']
    }
}

module.exports = nextConfig
