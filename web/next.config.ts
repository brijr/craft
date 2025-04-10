import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/shadcn",
        destination:
          "https://raw.githubusercontent.com/brijr/craft/refs/heads/main/registry/craft-ds.json",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
