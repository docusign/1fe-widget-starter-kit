import { platformProps } from "@1fe/shell";
import { Button, Flex, Card } from "antd";
import { useReducer } from "react";

import { GetChildWidget } from "../misc/utils";
import { WidgetContainer } from "../misc/widgetContainer";
export const EventBus = () => {
  const [isVisible, showWidget] = useReducer(() => true, false);

  type WidgetEvents = {
    event1: { param1: string };
    event2: { param2: string };
  };

  return (
    <div data-qa="utils.eventBus.container">
      <Card title="Event Bus Utilities" style={{ width: "650px" }}>
        <Flex gap={5}>
          <Button data-qa="utils.eventBus.get.btn" onClick={showWidget}>
            utils.eventBus.get.test
          </Button>
          <Button
            data-qa="utils.eventBus.publish1.btn"
            onClick={() => {
              platformProps.utils.eventBus.publish<WidgetEvents, "event1">({
                targetWidgetId: "@1fe/sample-widget",
                eventName: "event1",
                data: { param1: "Listener is working!" },
              });
            }}
          >
            utils.eventBus.test.publish1
          </Button>
          <Button
            data-qa="utils.eventBus.publish2.btn"
            onClick={() => {
              platformProps.utils.eventBus.publish<WidgetEvents, "event2">({
                targetWidgetId: "@internal/generic-child-widget",
                eventName: "event2",
                data: { param2: "Test 2 should not fire" },
              });
            }}
          >
            utils.eventBus.test.publish2
          </Button>
        </Flex>
        {isVisible && (
          <WidgetContainer data-qa="utils.widgets.eventBus.result.container">
            <GetChildWidget
              isVisible={isVisible}
              widgetId={"@1fe/sample-widget"}
            />
          </WidgetContainer>
        )}
      </Card>
    </div>
  );
};
