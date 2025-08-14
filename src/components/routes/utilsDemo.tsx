import styled from "@emotion/styled";
import { Flex, Typography, Card } from "antd";
import { InfoCircleOutlined, RocketOutlined } from "@ant-design/icons";

import { Context } from "../context/context";
import { EventBus } from "../eventBus/eventBus";
import { Experience } from "../experience";
import { LocalAndSessionStorage } from "../localAndSessionStorage";
import { Widgets } from "../widgets";

import { AppLoadTime } from "../appLoadTime/appLoadTime";
import { CustomLoader } from "../customLogger";

const Container = styled.div({
  padding: "32px",
  backgroundColor: "#fafafa",
  minHeight: "100vh",
});

const HeaderSection = styled.div({
  textAlign: "center",
  marginBottom: "48px",
  padding: "32px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
});

const { Title, Paragraph } = Typography;

export const UtilsDemo = () => {
  return (
    <Container>
      <HeaderSection>
        <Title
          level={1}
          style={{
            margin: 0,
            marginBottom: 16,
            background: "linear-gradient(45deg, #1890ff, #722ed1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem",
          }}
        >
          <RocketOutlined style={{ marginRight: 12, color: "#1890ff" }} />
          1FE Platform Utilities
        </Title>
        <Paragraph
          style={{
            fontSize: 16,
            color: "#666",
            maxWidth: 800,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          This page highlights the default platform utilities available to 1FE
          widgets. Each utility is designed to solve common widget development
          challenges - from managing context and storage to inter-widget
          communication and performance monitoring. It also highlights a custom
          utility that was added by the 1FE instance and is being made available
          by the shell.
        </Paragraph>
        <Card
          size="small"
          style={{
            marginTop: 20,
            maxWidth: 600,
            margin: "20px auto 0",
            backgroundColor: "#f0f9ff",
            border: "1px solid #bae7ff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <InfoCircleOutlined style={{ color: "#1890ff" }} />
            <span style={{ fontSize: 14, color: "#1890ff", fontWeight: 500 }}>
              Hover over any button to see detailed explanations and API usage
            </span>
          </div>
        </Card>
      </HeaderSection>

      <Flex vertical gap={32}>
        <Context />
        <Widgets />
        <LocalAndSessionStorage />
        <Experience />
        <EventBus />
        <AppLoadTime />
        <CustomLoader />
      </Flex>
    </Container>
  );
};
