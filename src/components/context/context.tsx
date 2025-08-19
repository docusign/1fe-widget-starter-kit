import { platformProps } from "@1fe/shell";
import { Flex, Card } from "antd";
import { useState } from "react";
import {
  SettingOutlined,
  InfoCircleOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import { GetChildWidget } from "../misc/utils";
import { WidgetContainer } from "../misc/widgetContainer";
import { UtilityTooltip } from "../common/UtilityTooltip";
import { UtilitySection } from "../common/UtilitySection";
import { utilityCard, flexProps } from "../../sharedStyles";

export const Context = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [contextResult, setContextResult] = useState("");

  return (
    <div data-qa="utils.context.container">
      <UtilitySection
        title="Context Utilities"
        description="Access widget context information including host environment details, widget metadata and more"
      >
        <Card style={utilityCard}>
          <Flex {...flexProps}>
            <UtilityTooltip
              title="Load Child Widget"
              description="Demonstrates how to load a child widget."
              apiMethod="platformProps.utils.widgets.get()"
              size="large"
              type="primary"
              data-qa="utils.context.get.btn"
              onClick={() => setShowWidget(true)}
            >
              <SettingOutlined /> Load Child Widget
            </UtilityTooltip>

            <UtilityTooltip
              title="Get Widget Self Context"
              description="Retrieves the current widget's own context information including widget ID, version, and configuration."
              apiMethod="platformProps.context.self"
              size="large"
              data-qa="utils.context.self.btn"
              onClick={() => {
                setShowWidget(false);
                setContextResult(
                  JSON.stringify(platformProps.context.self, null, 2),
                );
              }}
            >
              <InfoCircleOutlined /> Get My Context
            </UtilityTooltip>

            <UtilityTooltip
              title="Get Host's Context"
              description="Retrieves information about the host widget."
              apiMethod="platformProps.context.getHost()"
              size="large"
              data-qa="utils.context.host.btn"
              onClick={() => {
                setShowWidget(false);
                setContextResult(
                  JSON.stringify(platformProps.context.getHost(), null, 2),
                );
              }}
            >
              <GlobalOutlined /> Get Host's Context
            </UtilityTooltip>
          </Flex>

          {showWidget ? (
            <WidgetContainer data-qa="utils.widgets.context.result.container">
              <GetChildWidget isVisible={showWidget} />
            </WidgetContainer>
          ) : (
            <div
              data-qa="wsk.context.result.container"
              style={{
                marginTop: 20,
                padding: 16,
                backgroundColor: "#f5f5f5",
                borderRadius: 6,
                fontSize: 12,
                fontFamily: "monospace",
                maxHeight: 300,
                overflow: "auto",
              }}
            >
              {contextResult ||
                "Click a button above to see context information"}
            </div>
          )}
        </Card>
      </UtilitySection>
    </div>
  );
};
