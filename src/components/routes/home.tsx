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
import { utilityCard, flexProps, colors } from "../../sharedStyles";
import {
  heroTitle,
  heroDescription,
  rocketIcon,
  panelHeader,
  panelDescription,
  jsonViewerContainer,
  proTipBox,
  codeSnippet,
  introSection,
  introText,
  jsonViewerStyle,
} from "./styles/home.styles";

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
  const [expandedProps, setExpandedProps] = useState<string[]>([
    "platform",
    "host",
  ]);
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
        <Title level={1} style={heroTitle}>
          <RocketOutlined style={{ ...rocketIcon, color: colors.primary }} />
          Welcome to 1FE Widget Starter Kit
        </Title>
        <Paragraph style={{ ...heroDescription, color: colors.textSecondary }}>
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
          <Card style={utilityCard}>
            <Flex {...flexProps}>
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
          <Card style={utilityCard}>
            <Flex vertical gap={16}>
              <div style={introSection}>
                <Paragraph
                  style={{ ...introText, color: colors.textSecondary }}
                >
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
                      <div style={panelHeader}>
                        <Tag color={section.color}>{section.title}</Tag>
                        <span
                          style={{
                            color: colors.textSecondary,
                            ...panelDescription,
                          }}
                        >
                          {section.description}
                        </span>
                      </div>
                    }
                    key={section.key}
                  >
                    <div style={jsonViewerContainer}>
                      <JsonViewer
                        value={section.data}
                        enableClipboard={true}
                        defaultInspectDepth={2}
                        theme="light"
                        style={jsonViewerStyle}
                      />
                    </div>
                  </Panel>
                ))}
              </Collapse>

              <div style={proTipBox}>
                💡 <strong>Pro Tip:</strong> Use{" "}
                <code style={codeSnippet}>platformProps.utils.*</code> to access
                powerful features like storage, context management, and
                inter-widget communication!
              </div>
            </Flex>
          </Card>
        </UtilitySection>
      </Flex>
    </Container>
  );
};
