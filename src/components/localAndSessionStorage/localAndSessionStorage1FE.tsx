import { platformProps } from "@1fe/shell";
import { Button, Flex, Card } from "antd";
import { useState } from "react";

import { ResultElementBoundary } from "../misc/resultElementBoundary";

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
    <div
      data-qa="utils.localAndSessionStorage1FE.container"
      style={{ display: "flex", flexDirection: "row", gap: "20px" }}
    >
      <Card title="Local Storage Utilites" style={{ width: "650px" }}>
        <Flex gap={5}>
          <Button
            data-qa="utils.localAndSessionStorage1FE.localStorage.getBoolean.btn"
            onClick={() => getResult("key2", true)}
          >
            localStorageSetAndGetBoolean
          </Button>
          <Button
            data-qa="utils.localAndSessionStorage1FE.localStorage.get.btn"
            onClick={() => getResult("key1", "value1")}
          >
            localStorageSetAndGetString
          </Button>
        </Flex>
        <ResultElementBoundary
          role="status"
          data-qa={"utils.localStorage.get.result"}
        >
          {result}
        </ResultElementBoundary>
      </Card>
      <Card title="Session Storage Utilities" style={{ width: "650px" }}>
        <Flex gap={5}>
          <Button
            data-qa="utils.localAndSessionStorage1FE.sessionStorage.getSessionString.btn"
            onClick={() => getSessionResult("key1", "sessionStringValue")}
          >
            sessionStorageSetAndGetString
          </Button>

          <Button
            data-qa="utils.localAndSessionStorage1FE.sessionStorage.getSessionBoolean.btn"
            onClick={() => getSessionResult("key3", true)}
          >
            sessionStorageSetAndGetBoolean
          </Button>
        </Flex>
        <ResultElementBoundary
          role="status"
          data-qa={"utils.sessionStorage.getSession.result"}
        >
          {sessionResult}
        </ResultElementBoundary>
      </Card>
    </div>
  );
};
