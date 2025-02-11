import withTM from "next-transpile-modules";

const nextConfig = withTM([
  "antd",
  "rc-util",
  "rc-pagination",
  "rc-select",
  "rc-tooltip",
  "rc-picker",
  "@ant-design/icons",
  "@ant-design/icons-svg",
])({
  reactStrictMode: true,
  experimental: { appDir: false }, // Disable App Router if needed
});

export default nextConfig;

