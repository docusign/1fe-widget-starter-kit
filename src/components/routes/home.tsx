import styled from "@emotion/styled";
import { Flex, Typography, Card, Button, Collapse, Tag } from "antd";
import {
  InfoCircleOutlined,
  RocketOutlined,
  CodeOutlined,
  ToolOutlined,
  BookOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { JsonViewer } from "@textea/json-viewer";

import { RootState } from "../../store";
import { WidgetProps } from "../../contract";
import { UtilityTooltip } from "../common/UtilityTooltip";
import { UtilitySection } from "../common/UtilitySection";

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
const { Panel } = Collapse;

export const Home: React.FC<WidgetProps> = (props) => {
  const greeting = useSelector((state: RootState) => state.hello.greeting);
  const [expandedProps, setExpandedProps] = useState<string[]>([]);
  const navigate = useNavigate();

  const propSections = [
    {
      key: "platform",
      title: "Platform Properties",
      description: "Core platform utilities provided by 1FE",
      data: props.platform,
      color: "#1890ff",
    },
    {
      key: "host",
      title: "Host Properties",
      description:
        "Properties passed from the host widget to this child widget.",
      data: props.host,
      color: "#52c41a",
    },
  ];

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
          Welcome to 1FE Widget Starter Kit
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
          {greeting} You're now ready to build amazing widgets with the 1FE
          platform! This starter kit provides everything you need to create,
          test, and deploy widgets with modern development tools and best
          practices.
        </Paragraph>
      </HeaderSection>

      <Flex vertical gap={32}>
        {/* Getting Started Section */}
        <UtilitySection
          title="Getting Started"
          description="Quick actions to help you begin your widget development journey with confidence and best practices."
        >
          <Card style={{ width: "100%", maxWidth: "800px" }}>
            <Flex gap={12} wrap>
              <UtilityTooltip
                title="Explore Platform Utilities"
                description="Navigate to the Utils tab to see interactive examples of all platform features like storage, context, and event bus."
                apiMethod="navigate('utils')"
                type="primary"
                size="large"
                onClick={() => navigate("utils")}
              >
                <ToolOutlined /> Explore Utils
              </UtilityTooltip>

              <UtilityTooltip
                title="Explore Documentation"
                description="Open the comprehensive 1FE documentation to learn about advanced features, best practices, and detailed API references."
                apiMethod="window.open('https://1fe.com/start-here/')"
                type="primary"
                size="large"
                onClick={() =>
                  window.open("https://1fe.com/start-here/", "_blank")
                }
              >
                <BookOutlined /> Explore Documentation
              </UtilityTooltip>
            </Flex>
          </Card>
        </UtilitySection>

        {/* Widget Properties Section */}
        <UtilitySection
          title="Widget Properties Explorer"
          description="Examine the platform and host properties passed to your widget."
        >
          <Card style={{ width: "100%", maxWidth: "800px" }}>
            <Flex vertical gap={16}>
              <div style={{ marginBottom: 16 }}>
                <Paragraph style={{ margin: 0, color: "#666" }}>
                  Your widget receives props from the platform and also from the
                  host widget. Expand the sections below to explore what's
                  available:
                </Paragraph>
              </div>

              <Collapse
                activeKey={expandedProps}
                onChange={(keys) =>
                  setExpandedProps(Array.isArray(keys) ? keys : [keys])
                }
                ghost
              >
                {propSections.map((section) => (
                  <Panel
                    header={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <Tag color={section.color}>{section.title}</Tag>
                        <span style={{ color: "#666", fontSize: 14 }}>
                          {section.description}
                        </span>
                      </div>
                    }
                    key={section.key}
                  >
                    <div
                      style={{
                        backgroundColor: "#fafafa",
                        padding: 16,
                        borderRadius: 6,
                        maxHeight: 400,
                        overflow: "auto",
                      }}
                    >
                      <JsonViewer
                        value={section.data}
                        enableClipboard={true}
                        defaultInspectDepth={2}
                        theme="light"
                        style={{ fontSize: 12 }}
                      />
                    </div>
                  </Panel>
                ))}
              </Collapse>

              <div
                style={{
                  marginTop: 16,
                  padding: 12,
                  backgroundColor: "#fff7e6",
                  borderRadius: 6,
                  fontSize: 14,
                  color: "#fa8c16",
                }}
              >
                💡 <strong>Pro Tip:</strong> Use{" "}
                <code>platformProps.utils.*</code> to access powerful features
                like storage, context management, and inter-widget
                communication!
              </div>
            </Flex>
          </Card>
        </UtilitySection>
      </Flex>
    </Container>
  );
};
