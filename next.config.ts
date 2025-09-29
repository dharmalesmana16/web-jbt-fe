import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds:true
  },
  typescript:{
    ignoreBuildErrors:true
  },
   env: {
    BASE_BE_URL: process.env.BE_URL,
  },
  crossOrigin:'anonymous'
};

export default nextConfig;
