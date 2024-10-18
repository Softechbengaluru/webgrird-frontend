import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/webgrird-frontend",
};

export default withNextVideo(nextConfig);
