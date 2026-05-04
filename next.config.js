/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // ensure Next.js plays nicely with the standard src structure if desired, but we move to app
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
}

export default nextConfig
