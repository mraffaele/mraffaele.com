import { basePath } from "@/utils/basePath";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
