import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
            },
            {
                protocol: "https",
                hostname: "avatars.mds.yandex.net",
            },
            {
                protocol: "https",
                hostname: "*.userapi.com",
            },
            {
                protocol: "https",
                hostname: "sun9-*.userapi.com",
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
            {
                protocol: "https",
                hostname: "www.virginmegastore.ae",
            },
            {
                protocol: "https",
                hostname: "virginmegastore.ae",
            },
            {
                protocol: "https",
                hostname: "humanswith.ai",
            },
            {
                protocol: "https",
                hostname: "www.humanswith.ai",
            },
            {
                protocol: "https",
                hostname: "sibsutis.ru",
            },
            {
                protocol: "https",
                hostname: "*.sibsutis.ru",
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },
            {
                protocol: 'https',
                hostname: 'i9.photo.2gis.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i5.photo.2gis.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i3.photo.2gis.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i1.photo.2gis.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i6.photo.2gis.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'sdelanounas.ru',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'flagfs.ru',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;