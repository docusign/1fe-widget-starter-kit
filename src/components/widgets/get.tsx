import { Flex, Card } from "antd";
import { useState } from "react";
import { AppstoreOutlined, LoadingOutlined } from "@ant-design/icons";

import { GetChildWidget, GetChildWidgetWithCustomLoader } from "../misc/utils";
import { WidgetContainer } from "../misc/widgetContainer";
import { UtilityTooltip } from "../common/UtilityTooltip";
import { UtilitySection } from "../common/UtilitySection";
import { utilityCard, flexProps } from "../../sharedStyles";

export const Get = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [
    showWidgetWithCustomLoaderVisible,
    setShowWidgetWithCustomLoaderVisible,
  ] = useState(false);

  return (
    <div data-qa={"utils.widgets.get.container"}>
      <UtilitySection
        title="Widget Load Utilities"
        description="load child widgets within your application."
      >
        <Card style={utilityCard}>
          <Flex {...flexProps}>
            <UtilityTooltip
              title="Load Standard Widget"
              description="Loads a child widget using the default platform loader. This is the most common way to embed widgets."
              apiMethod="platformProps.utils.widgets.get()"
              type="primary"
              data-qa={"utils.widgets.get.btn"}
              onClick={() => {
                setShowWidget(true);
                setShowWidgetWithCustomLoaderVisible(false);
              }}
            >
              <AppstoreOutlined /> Load Widget
            </UtilityTooltip>

            <UtilityTooltip
              title="Load Widget with Custom Loader"
              description="Loads a widget with a custom loading indicator. Useful for providing custom loading experiences."
              apiMethod="platformProps.utils.widgets.get() + custom loader"
              type="dashed"
              data-qa={"utils.widgets.get.custom-loader.btn"}
              onClick={() => {
                setShowWidgetWithCustomLoaderVisible(true);
                setShowWidget(false);
              }}
            >
              <LoadingOutlined /> Load with Custom Loader
            </UtilityTooltip>
          </Flex>

          {showWidget && (
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  padding: 12,
                  backgroundColor: "#f6ffed",
                  borderRadius: 6,
                  marginBottom: 12,
                  fontSize: 14,
                  color: "#52c41a",
                }}
              >
                🎯 Standard widget loaded with default platform loader
              </div>
              <WidgetContainer data-qa={"utils.widgets.get.result.container"}>
                <GetChildWidget isVisible={showWidget} />
              </WidgetContainer>
            </div>
          )}

          {showWidgetWithCustomLoaderVisible && (
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  padding: 12,
                  backgroundColor: "#fff7e6",
                  borderRadius: 6,
                  marginBottom: 12,
                  fontSize: 14,
                  color: "#fa8c16",
                }}
              >
                ⚡ Widget loaded with custom loading indicator
              </div>
              <WidgetContainer data-qa={"utils.widgets.get.result.container"}>
                <GetChildWidgetWithCustomLoader
                  isVisible={showWidgetWithCustomLoaderVisible}
                />
              </WidgetContainer>
            </div>
          )}
        </Card>
      </UtilitySection>
    </div>
  );
};
