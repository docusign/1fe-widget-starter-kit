import React from "react";
import { Get } from "./get";

export const Widgets: React.FC = () => {
  return (
    <div data-qa="utils.widgets.container">
      <Get />
    </div>
  );
};
