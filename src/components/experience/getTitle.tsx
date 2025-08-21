import { platformProps } from "@1fe/shell";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";

import { UtilityTooltip } from "../common/UtilityTooltip";

export const GetTitle = () => {
  const [currentTitle, setCurrentTitle] = useState<string>("");

  const handleGetTitle = () => {
    const title = platformProps.utils.experience.title.get();
    setCurrentTitle(title);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 16,
        backgroundColor: "#f6ffed",
        borderRadius: 6,
      }}
    >
      <UtilityTooltip
        title="Get Current Page Title"
        description="Retrieves the current browser tab title."
        apiMethod="platformProps.utils.experience.title.get()"
        type="dashed"
        data-qa="utils.experience.title.get"
        onClick={handleGetTitle}
      >
        <EyeOutlined /> Get Current Title
      </UtilityTooltip>
      {currentTitle && (
        <div
          style={{
            padding: "8px 12px",
            backgroundColor: "white",
            borderRadius: 4,
            border: "1px solid #d9d9d9",
            fontFamily: "monospace",
            fontSize: 12,
          }}
        >
          Title: "{currentTitle}"
        </div>
      )}
    </div>
  );
};
