import React from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { colors } from "../../sharedStyles";
import {
  section,
  header,
  title as titleStyle,
  helpIcon,
  description as descriptionStyle,
} from "./styles/UtilitySection.styles";

interface UtilitySectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const UtilitySection: React.FC<UtilitySectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div style={section}>
      <div style={header}>
        <h3 style={titleStyle}>{title}</h3>
        <Tooltip title={description}>
          <InfoCircleOutlined style={{ ...helpIcon, color: colors.primary }} />
        </Tooltip>
      </div>
      <p style={{ ...descriptionStyle, color: colors.textSecondary }}>
        {description}
      </p>
      {children}
    </div>
  );
};
