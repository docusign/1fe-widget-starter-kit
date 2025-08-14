import { Flex, Card } from "antd";
import { ExperimentOutlined } from "@ant-design/icons";

import { GetTitle } from "./getTitle";
import { SetTitle } from "./setTitle";
import { UtilitySection } from "../common/UtilitySection";

/**
 * Experience Utility examples
 */
export const Experience: React.FC = () => {
  return (
    <div data-qa="utils.experience.container">
      <UtilitySection
        title="Experience Utilities"
        description="Control the user's experience."
      >
        <Card style={{ width: "100%", maxWidth: "800px" }}>
          <Flex gap={12} vertical>
            <SetTitle />
            <GetTitle />
          </Flex>
        </Card>
      </UtilitySection>
    </div>
  );
};
