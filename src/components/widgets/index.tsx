import React from "react";

import { utilSectionStyles } from "../routes/styles/utilsDemo.styles";
import { Get } from "./get";

export const Widgets: React.FC = () => {
  return (
    <div css={utilSectionStyles} data-qa="utils.widgets.container">
      <Get />
    </div>
  );
};
