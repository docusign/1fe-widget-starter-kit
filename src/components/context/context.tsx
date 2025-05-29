import { platformProps } from '@1fe/shell';
import { Button, Flex, Card } from 'antd';
import { useState } from 'react';

import { GetChildWidget } from '../misc/utils';
import { WidgetContainer } from '../misc/widgetContainer';

export const Context = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [contextResult, setContextResult] = useState('');

  return (
    <div data-qa='utils.context.container'>
      <Card title="Context Utilities" style={{ width: '650px' }}>
        <Flex gap={5}>
          <Button
            size='large'
            data-qa='utils.context.get.btn'
            onClick={() => setShowWidget(true)}
          >
          utils.context.get
        </Button>
        <Button
          size='large'
          data-qa='utils.context.self.btn'
          onClick={() => {
            setShowWidget(false);
            setContextResult(JSON.stringify(platformProps.context.self));
          }}
        >
          utils.context.self
        </Button>
        <Button
          size='large'
          data-qa='utils.context.host.btn'
          onClick={() => {
            setShowWidget(false);
            setContextResult(JSON.stringify(platformProps.context.getHost()));
          }}
        >
          utils.context.getHost
        </Button>
        </Flex>      
        {showWidget ? (
          <WidgetContainer data-qa='utils.widgets.context.result.container'>
            <GetChildWidget isVisible={showWidget} />
          </WidgetContainer>
        ) : (<div data-qa='wsk.context.result.container' style={{ marginTop: 20 }}>{contextResult}</div>)}
      </Card>  
    </div>
  );
};
