import styled from "@emotion/styled";
import { Flex, Typography, Divider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { JsonViewer } from "@textea/json-viewer";

import { RootState } from "../../store";
import { WidgetProps } from "../../contract";

const Container = styled.div({
  padding: "48px",
  backgroundColor: "white",
});

const { Title, Text } = Typography;

export const Home: React.FC<WidgetProps> = (props) => {
  const greeting = useSelector((state: RootState) => state.hello.greeting);

  return (
    <Container>
      <Title>{greeting}</Title>
      <Text>
        This widget starter kit is made possible leveraging @1fe/cli for rapid
        development.
      </Text>
      <Divider />
      <Flex vertical>
        <Title level={4}>Check out the Platform and Host Props</Title>
        <JsonViewer
          value={props}
          enableClipboard={false}
          defaultInspectDepth={3}
        />
      </Flex>
    </Container>
  );
};
