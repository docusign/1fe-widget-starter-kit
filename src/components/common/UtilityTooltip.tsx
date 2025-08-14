import React from "react";
import { Tooltip, Button, ButtonProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

interface UtilityTooltipProps extends ButtonProps {
  title: string;
  description: string;
  apiMethod: string;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
}

export const UtilityTooltip: React.FC<UtilityTooltipProps> = ({
  title,
  description,
  apiMethod,
  children,
  placement = "top",
  ...buttonProps
}) => {
  const tooltipContent = (
    <div style={{ maxWidth: 300 }}>
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>{title}</div>
      <div style={{ marginBottom: 8 }}>{description}</div>
      <div style={{ fontSize: "11px", opacity: 0.8, fontFamily: "monospace" }}>
        API: {apiMethod}
      </div>
    </div>
  );

  return (
    <Tooltip title={tooltipContent} placement={placement}>
      <Button {...buttonProps}>{children}</Button>
    </Tooltip>
  );
};
