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
import { colors } from "../../sharedStyles";
import {
  heroTitle,
  heroDescription,
  rocketIcon,
  infoCard,
  infoIconContainer,
  infoText,
} from "./styles/utilsDemo.styles";

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
        <Title level={1} style={heroTitle}>
          <RocketOutlined style={{ ...rocketIcon, color: colors.primary }} />
          1FE Platform Utilities
        </Title>
        <Paragraph style={{ ...heroDescription, color: colors.textSecondary }}>
          This page highlights the default platform utilities available to 1FE
          widgets. Each utility is designed to solve common widget development
          challenges - from managing context and storage to inter-widget
          communication and performance monitoring. It also highlights a custom
          utility that was added by the 1FE instance and is being made available
          by the shell.
        </Paragraph>
        <Card size="small" style={infoCard}>
          <div style={infoIconContainer}>
            <InfoCircleOutlined style={{ color: colors.primary }} />
            <span style={{ ...infoText, color: colors.primary }}>
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
