import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@radix-ui/react-accordion",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-menubar",
    "@radix-ui/react-slot",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "/uploads/**",
      },
     
      {
        protocol: "https",
        hostname: "*.vercel.app",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.netlify.app",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.herokuapp.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
