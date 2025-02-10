import { ConfigProvider, Button } from "antd";
import theme from "antd/es/theme";
import { CheckCircleFilled } from "@ant-design/icons";

export default function Home() {
  return (
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <div style={{ padding: "20px" }}>
        <h1>Welcome to Ant Design v5 with Next.js 15 (ESM)!</h1>
        <Button type="primary" icon={<CheckCircleFilled />}>Click Me</Button>
      </div>
    </ConfigProvider>
  );
}
