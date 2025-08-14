import React from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

interface UtilitySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const UtilitySection: React.FC<UtilitySectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{title}</h3>
        <Tooltip title={description}>
          <InfoCircleOutlined style={{ color: "#1890ff", cursor: "help" }} />
        </Tooltip>
      </div>
      <p
        style={{
          margin: "0 0 16px 0",
          color: "#666",
          fontSize: 14,
          lineHeight: 1.4,
        }}
      >
        {description}
      </p>
      {children}
    </div>
  );
};

