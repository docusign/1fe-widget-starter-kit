import React from "react";
import { Tooltip, Button, ButtonProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  tooltipContent,
  tooltipTitle,
  tooltipDescription,
  tooltipApi,
} from "./styles/UtilityTooltip.styles";

interface UtilityTooltipProps extends ButtonProps {
  title: string;
  description: string;
  apiMethod: string;
  children?: React.ReactNode;
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
  const tooltipContentElement = (
    <div style={tooltipContent}>
      <div style={tooltipTitle}>{title}</div>
      <div style={tooltipDescription}>{description}</div>
      <div style={tooltipApi}>API: {apiMethod}</div>
    </div>
  );

  return (
    <Tooltip title={tooltipContentElement} placement={placement}>
      <Button {...buttonProps}>{children}</Button>
    </Tooltip>
  );
};
