import { platformProps } from "@1fe/shell";
import { Input } from "antd";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

import { UtilityTooltip } from "../common/UtilityTooltip";

export const SetTitle = () => {
  const [title, setTitle] = useState<string>("Hello World");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 16,
        backgroundColor: "#fafafa",
        borderRadius: 6,
      }}
    >
      <Input
        data-qa="utils.experience.set-title.normal.input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter new page title"
        style={{ flex: 1 }}
        prefix={<EditOutlined />}
      />
      <UtilityTooltip
        title="Set Page Title"
        description="Updates the browser tab title with your custom text. Useful for indicating widget state or providing context."
        apiMethod="platformProps.utils.experience.title.set(title)"
        type="primary"
        data-qa="utils.experience.title.set"
        onClick={() => platformProps.utils.experience.title.set(title)}
      >
        Set Title
      </UtilityTooltip>
    </div>
  );
};
