import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'thumbs.dreamstime.com' },
      { protocol: 'https', hostname: 'www.irishexaminer.com' },
      { protocol: 'https', hostname: 'www.shms.com' },
      { protocol: 'https', hostname: 'tse2.mm.bing.net' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'adventourss.com' },
      { protocol: 'https', hostname: 'aperturejourneys.com' },
      { protocol: 'https', hostname: 'www.historyhit.com' },
      { protocol: 'https', hostname: 'cdn.properties.emaar.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'tse3.mm.bing.net' },
      { protocol: 'https', hostname: 'encrypted-tbn3.gstatic.com' },
    ],
  },
};

export default nextConfig;