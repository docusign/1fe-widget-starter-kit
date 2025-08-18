import { Flex, Card } from "antd";
import { useState } from "react";
import { BugOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { platformProps } from "@1fe/shell";

import { UtilityTooltip } from "../common/UtilityTooltip";
import { UtilitySection } from "../common/UtilitySection";
import { utilityCard, flexProps } from "../../sharedStyles";

/**
 * Platform Logger Utilities - Demonstrates 1FE platform logging
 */
export const CustomLoader: React.FC = () => {
  const [logState, setLogState] = useState<boolean>(false);

  const logInfo = (message: string) => {
    // Use platform logger utility if available, fallback to console
    if (
      (
        platformProps.utils as unknown as {
          logger?: { log: (msg: string) => void };
        }
      )?.logger?.log
    ) {
      // @ts-expect-error - logger types are not fully defined in platform yet
      platformProps.utils.logger.log(message);

      setLogState(true);
    }
  };

  const logError = (message: string) => {
    // Use platform logger utility if available, fallback to console
    if (
      (
        platformProps.utils as unknown as {
          logger?: { error: (msg: string) => void };
        }
      )?.logger?.error
    ) {
      // @ts-expect-error - logger types are not fully defined in platform yet
      platformProps.utils.logger.error(message);

      setLogState(true);
    }
  };

  return (
    <div data-qa="utils.customLogger.container">
      <UtilitySection
        title="Custom Logging Utilities"
        description="Demonstrates a custom logging utility that was added by the 1fe instance and is being made available by the shell."
      >
        <Card style={utilityCard}>
          <Flex {...flexProps}>
            <UtilityTooltip
              title="Log Info Message"
              description="Uses platformProps.utils.logger.log() to log informational messages to console."
              apiMethod="platformProps.utils.logger.log(message)"
              type="primary"
              data-qa="utils.customLogger.info.btn"
              onClick={() =>
                logInfo(
                  "This is an example info message using platform logger utilities!",
                )
              }
            >
              <InfoCircleOutlined /> Log Info
            </UtilityTooltip>

            <UtilityTooltip
              title="Log Error Message"
              description="Uses platformProps.utils.logger.error() to log error messages to console."
              apiMethod="platformProps.utils.logger.error(message)"
              type="dashed"
              data-qa="utils.customLogger.error.btn"
              onClick={() =>
                logError(
                  "This is an example error message using platform logger utilities!",
                )
              }
            >
              <BugOutlined style={{ color: "#f5222d" }} /> Log Error
            </UtilityTooltip>
          </Flex>

          {logState && (
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: "#8c8c8c",
                  fontStyle: "italic",
                }}
              >
                💡 Check your browser's developer console (F12) to see platform
                logger output and telemetry data
              </div>
            </div>
          )}
        </Card>
      </UtilitySection>
    </div>
  );
};
