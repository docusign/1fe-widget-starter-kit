import { platformProps } from "@1fe/shell";
import { Flex, Card } from "antd";
import { useReducer, useState } from "react";
import {
  PlayCircleOutlined,
  StopOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

import { WidgetContainer } from "../misc/widgetContainer";
import { GetChildWidget } from "../misc/utils";
import { UtilityTooltip } from "../common/UtilityTooltip";
import { UtilitySection } from "../common/UtilitySection";
import { utilityCard, flexProps, colors } from "../../sharedStyles";

export const AppLoadTime = () => {
  const [isVisible, showWidget] = useReducer(() => true, false);
  const [entries, setEntries] = useState<string | null>(null);
  const [measure, setMeasure] = useState<string | null>(null);

  return (
    <div data-qa="utils.appLoadTime.container">
      <UtilitySection
        title="Performance Monitoring Utilities"
        description="Measure and track application load times, and custom timing markers"
      >
        <Card style={utilityCard}>
          <Flex {...flexProps}>
            <UtilityTooltip
              title="Load Demo Widget"
              description="Loads a demo widget to demonstrate performance measurement during widget loading and rendering."
              apiMethod="platformProps.utils.widgets.get()"
              type="primary"
              data-qa="utils.appLoadTime.get.btn"
              onClick={showWidget}
            >
              <PlayCircleOutlined /> Load Demo Widget
            </UtilityTooltip>

            <UtilityTooltip
              title="Get Performance Entries"
              description="Retrieves all performance measurement entries, including those from other widgets."
              apiMethod="platformProps.utils.appLoadTime.getEntries()"
              type="dashed"
              data-qa="utils.appLoadTime.getEntries.btn"
              onClick={async () => {
                const resultString = platformProps.utils.appLoadTime
                  .getEntries()
                  .map((entry) => {
                    return `Name: ${entry.name}, Type: ${entry.entryType}, Start: ${entry.startTime}ms, Duration: ${entry.duration}ms`;
                  })
                  .join("; ");
                setEntries(resultString);
              }}
            >
              <BarChartOutlined /> Get Performance Data
            </UtilityTooltip>

            <UtilityTooltip
              title="Start Timing Marker"
              description="Creates a performance marker to start measuring a custom operation. Use this before the operation you want to time."
              apiMethod="platformProps.utils.appLoadTime.markStart()"
              type="dashed"
              data-qa="utils.appLoadTime.mark.btn"
              onClick={() => {
                platformProps.utils.appLoadTime.markStart(
                  "iLove1FESoMuchMarkTest",
                );
                setMeasure(
                  "⏱️ Timing started - click 'End Timing' to measure duration",
                );
              }}
            >
              <PlayCircleOutlined /> Start Timing
            </UtilityTooltip>

            <UtilityTooltip
              title="End Timing Marker"
              description="Ends the timing measurement and calculates the duration since the start marker. Returns the measured performance data."
              apiMethod="platformProps.utils.appLoadTime.markEnd()"
              type="dashed"
              data-qa="utils.appLoadTime.measure.btn"
              onClick={() => {
                const result = platformProps.utils.appLoadTime.markEnd(
                  "iLove1FESoMuchMarkTest",
                );
                if (result) {
                  setMeasure(
                    `⏱️ ${result.name}: ${result.duration.toFixed(2)}ms`,
                  );
                } else {
                  setMeasure(
                    "❌ No timing started - click 'Start Timing' first",
                  );
                }
              }}
            >
              <StopOutlined /> End Timing
            </UtilityTooltip>
          </Flex>

          {entries && (
            <div style={{ marginTop: 16 }}>
              <h4 style={{ margin: "0 0 8px 0", color: colors.primary }}>
                📊 Performance Entries:
              </h4>
              <div
                data-qa="utils.appLoadTime.getEntries.result"
                style={{
                  padding: 12,
                  backgroundColor: "#f0f9ff",
                  borderRadius: 6,
                  maxHeight: "300px",
                  overflow: "auto",
                  fontSize: 12,
                  fontFamily: "monospace",
                  lineHeight: 1.5,
                  whiteSpace: "pre-wrap",
                }}
              >
                {entries}
              </div>
            </div>
          )}

          {measure && (
            <div style={{ marginTop: 16 }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#52c41a" }}>
                ⏱️ Timing Result:
              </h4>
              <div
                data-qa="utils.appLoadTime.measure.result"
                style={{
                  padding: 12,
                  backgroundColor: "#f6ffed",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#52c41a",
                }}
              >
                {measure}
              </div>
            </div>
          )}

          {isVisible && (
            <div style={{ marginTop: 16 }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#722ed1" }}>
                🎯 Demo Widget:
              </h4>
              <WidgetContainer data-qa="utils.widgets.appLoadTime.result.container">
                <GetChildWidget isVisible={isVisible} />
              </WidgetContainer>
            </div>
          )}
        </Card>
      </UtilitySection>
    </div>
  );
};
