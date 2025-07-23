import { OneFeConfiguration } from "@1fe/cli";
import { getBaseConfig } from "@1fe/sample-widget-base-config"; // this is the redistributed package for the organization

const configuration: OneFeConfiguration = {
  baseConfig: getBaseConfig,
};

export default configuration;
