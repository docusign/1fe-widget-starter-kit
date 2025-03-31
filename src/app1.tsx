import { platformProps } from '@devhub/1fe-shell';
import React, { useEffect } from 'react';
import { Router as Widget } from './components/router';
import { withProvider } from './withProvider';
import { WidgetProps } from './contract';

const RootWrapper: React.FC<RootProps> = (props) => {
  useEffect(() => {
    platformProps.utils.appLoadTime.end();
  }, []);

  return <Widget {...props} />;
};

export default withProvider(RootWrapper);
