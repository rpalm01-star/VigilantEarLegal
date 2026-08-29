import type { NextConfig } from "next";

/**
 * Static export. Every page is rendered at BUILD time from the markdown beside it — no runtime
 * fetch of raw.githubusercontent.com, which is how the Google Sites embeds worked and why a doc
 * page could show a spinner, or nothing, when GitHub was slow.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
