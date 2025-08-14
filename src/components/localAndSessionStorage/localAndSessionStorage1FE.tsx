import { platformProps } from "@1fe/shell";
import { Flex, Card } from "antd";
import { useState } from "react";
import { DatabaseOutlined, HistoryOutlined } from "@ant-design/icons";

import { ResultElementBoundary } from "../misc/resultElementBoundary";
import { UtilityTooltip } from "../common/UtilityTooltip";
import { UtilitySection } from "../common/UtilitySection";

export const LocalAndSessionStorage1FE = () => {
  type allowedTypes = string | boolean | number;

  const [result, setResult] = useState<allowedTypes>("");
  const [sessionResult, setSessionResult] = useState<allowedTypes>();

  const getResult = (key: string, value: allowedTypes) => {
    platformProps.utils.localStorage.set(key, value);
    setResult(platformProps.utils.localStorage.get(key).toString());
  };

  const getSessionResult = (key: string, value: allowedTypes) => {
    platformProps.utils.sessionStorage.set(key, value);
    setSessionResult(platformProps.utils.sessionStorage.get(key).toString());
  };

  return (
    <div data-qa="utils.localAndSessionStorage1FE.container">
      <UtilitySection
        title="Storage Utilities"
        description="Access localStorage and sessionStorage with platform-safe APIs."
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Card
            title={
              <span>
                <DatabaseOutlined
                  style={{ marginRight: 8, color: "#1890ff" }}
                />
                Local Storage
              </span>
            }
            style={{ flex: 1, minWidth: "350px" }}
          >
            <Flex gap={12} vertical>
              <Flex gap={8} wrap>
                <UtilityTooltip
                  title="Store Text Data"
                  description="Saves a string value to localStorage."
                  apiMethod="platformProps.utils.localStorage.set(key, value)"
                  size="middle"
                  type="primary"
                  data-qa="utils.localAndSessionStorage1FE.localStorage.get.btn"
                  onClick={() => getResult("key1", "value1")}
                >
                  Save Text
                </UtilityTooltip>
                <UtilityTooltip
                  title="Store Boolean Data"
                  description="Saves a boolean value to localStorage."
                  apiMethod="platformProps.utils.localStorage.set(key, boolean)"
                  size="middle"
                  data-qa="utils.localAndSessionStorage1FE.localStorage.getBoolean.btn"
                  onClick={() => getResult("key2", true)}
                >
                  Save Boolean
                </UtilityTooltip>
              </Flex>
              <ResultElementBoundary
                role="status"
                data-qa={"utils.localStorage.get.result"}
                style={{
                  marginTop: 8,
                  padding: 12,
                  backgroundColor: "#f0f9ff",
                  borderRadius: 4,
                  minHeight: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {result || "No data stored yet"}
              </ResultElementBoundary>
            </Flex>
          </Card>

          <Card
            title={
              <span>
                <HistoryOutlined style={{ marginRight: 8, color: "#722ed1" }} />
                Session Storage
              </span>
            }
            style={{ flex: 1, minWidth: "350px" }}
          >
            <Flex gap={12} vertical>
              <Flex gap={8} wrap>
                <UtilityTooltip
                  title="Store Session Text"
                  description="Saves a string value to sessionStorage."
                  apiMethod="platformProps.utils.sessionStorage.set(key, value)"
                  size="middle"
                  type="primary"
                  data-qa="utils.localAndSessionStorage1FE.sessionStorage.getSessionString.btn"
                  onClick={() => getSessionResult("key1", "sessionStringValue")}
                >
                  Save Session Text
                </UtilityTooltip>
                <UtilityTooltip
                  title="Store Session Boolean"
                  description="Saves a boolean value to sessionStorage."
                  apiMethod="platformProps.utils.sessionStorage.set(key, boolean)"
                  size="middle"
                  data-qa="utils.localAndSessionStorage1FE.sessionStorage.getSessionBoolean.btn"
                  onClick={() => getSessionResult("key3", true)}
                >
                  Save Session Boolean
                </UtilityTooltip>
              </Flex>
              <ResultElementBoundary
                role="status"
                data-qa={"utils.sessionStorage.getSession.result"}
                style={{
                  marginTop: 8,
                  padding: 12,
                  backgroundColor: "#f9f0ff",
                  borderRadius: 4,
                  minHeight: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {sessionResult || "No session data stored yet"}
              </ResultElementBoundary>
            </Flex>
          </Card>
        </div>
      </UtilitySection>
    </div>
  );
};
