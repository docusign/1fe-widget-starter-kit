import { Button, Flex, Card } from "antd";
import { useState } from "react";

import { GetChildWidget, GetChildWidgetWithCustomLoader } from "../misc/utils";
import { WidgetContainer } from "../misc/widgetContainer";

export const Get = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [
    showWidgetWithCustomLoaderVisible,
    setShowWidgetWithCustomLoaderVisible,
  ] = useState(false);

  return (
    <div data-qa={"utils.widgets.get.container"}>
      <Card title="Widget Get Utility" style={{ width: "650px" }}>
        <Flex gap={5}>
          <Button
            data-qa={"utils.widgets.get.btn"}
            onClick={() => {
              setShowWidget(true);
            }}
          >
            {"utils.widgets.get"}
          </Button>
          <Button
            data-qa={"utils.widgets.get.custom-loader.btn"}
            onClick={() => {
              setShowWidgetWithCustomLoaderVisible(true);
            }}
          >
            {"utils.widgets.get with custom loader"}
          </Button>
        </Flex>
        {showWidget && (
          <WidgetContainer data-qa={"utils.widgets.get.result.container"}>
            <GetChildWidget isVisible={showWidget} />
          </WidgetContainer>
        )}
        {showWidgetWithCustomLoaderVisible && (
          <WidgetContainer data-qa={"utils.widgets.get.result.container"}>
            <GetChildWidgetWithCustomLoader
              isVisible={showWidgetWithCustomLoaderVisible}
            />
          </WidgetContainer>
        )}
      </Card>
    </div>
  );
};
