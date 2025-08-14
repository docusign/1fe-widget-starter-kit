import { platformProps } from "@1fe/shell";
import { Flex, Card } from "antd";
import { useReducer } from "react";
import {
  ThunderboltOutlined,
  SendOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import { GetChildWidget } from "../misc/utils";
import { WidgetContainer } from "../misc/widgetContainer";
import { UtilityTooltip } from "../common/UtilityTooltip";
import { UtilitySection } from "../common/UtilitySection";

export const EventBus = () => {
  const [isVisible, showWidget] = useReducer(() => true, false);

  type WidgetEvents = {
    event1: { param1: string };
    event2: { param2: string };
  };

  return (
    <div data-qa="utils.eventBus.container">
      <UtilitySection
        title="Event Bus Utilities"
        description="Enable inter-widget communication through a publish-subscribe pattern. Send messages between widgets without direct coupling."
      >
        <Card style={{ width: "100%", maxWidth: "800px" }}>
          <Flex gap={12} wrap>
            <UtilityTooltip
              title="Load Event Listener"
              description="Loads a child widget that will listen for events. This demonstrates the receiving side of widget communication."
              apiMethod="platformProps.utils.widgets.get()"
              type="primary"
              data-qa="utils.eventBus.get.btn"
              onClick={showWidget}
            >
              <MessageOutlined /> Load Event Listener
            </UtilityTooltip>

            <UtilityTooltip
              title="Send a published event"
              description="Publishes an event to the listener widget. For the purposes of the demo, we know that the listener widget has subscribed to the event."
              apiMethod="platformProps.utils.eventBus.publish()"
              type="dashed"
              data-qa="utils.eventBus.publish1.btn"
              onClick={() => {
                platformProps.utils.eventBus.publish<WidgetEvents, "event1">({
                  targetWidgetId: "@1fe/sample-widget",
                  eventName: "event1",
                  data: { param1: "Listener is working!" },
                });
              }}
            >
              <SendOutlined /> Send a published event
            </UtilityTooltip>

            <UtilityTooltip
              title="Send an unpublished event"
              description="Publishes an event that the listener widget hasn't subscribed to."
              apiMethod="platformProps.utils.eventBus.publish()"
              type="dashed"
              data-qa="utils.eventBus.publish2.btn"
              onClick={() => {
                platformProps.utils.eventBus.publish<WidgetEvents, "event2">({
                  targetWidgetId: "@internal/generic-child-widget",
                  eventName: "event2",
                  data: { param2: "Test 2 should not fire" },
                });
              }}
            >
              <SendOutlined /> Send an unpublished event
            </UtilityTooltip>
          </Flex>

          {isVisible && (
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  padding: 12,
                  backgroundColor: "#f0f9ff",
                  borderRadius: 6,
                  marginBottom: 12,
                  fontSize: 14,
                  color: "#1890ff",
                }}
              >
                📡 Event listener widget loaded below. Try sending events using
                the buttons above!
              </div>
              <WidgetContainer data-qa="utils.widgets.eventBus.result.container">
                <GetChildWidget
                  isVisible={isVisible}
                  widgetId={"@1fe/sample-widget"}
                />
              </WidgetContainer>
            </div>
          )}
        </Card>
      </UtilitySection>
    </div>
  );
};
