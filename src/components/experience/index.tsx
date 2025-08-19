import { Flex, Card } from "antd";

import { GetTitle } from "./getTitle";
import { SetTitle } from "./setTitle";
import { UtilitySection } from "../common/UtilitySection";
import { utilityCard } from "../../sharedStyles";

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
        <Card style={utilityCard}>
          <Flex gap={12} vertical>
            <SetTitle />
            <GetTitle />
          </Flex>
        </Card>
      </UtilitySection>
    </div>
  );
};
