import { platformProps } from '@1fe/shell';
import { Button, Flex, Card } from 'antd';
import { useReducer, useState } from 'react';
import { WidgetContainer } from '../misc/widgetContainer';
import { GetChildWidget } from '../misc/utils';

export const AppLoadTime = () => {
  const [isVisible, showWidget] = useReducer(() => true, false);
  const [entries, setEntries] = useState<string | null>(null);
  const [measure, setMeasure] = useState<string | null>(null);

  return (
    <div data-qa='utils.appLoadTime.container'>
      <Card title="App Load Time Utilities" style={{ width: 'auto'}}>
        <Flex gap={5}>
          <Button data-qa='utils.appLoadTime.get.btn' onClick={showWidget}>
            utils.appLoadTime.Get/MarkEnd
          </Button>
          <Button
            data-qa='utils.appLoadTime.getEntries.btn'
            onClick={async () => {
              const resultString = platformProps.utils.appLoadTime
                .getEntries()
                .map((entry) => {
                  return `Name: ${entry.name}, Entry Type: ${entry.entryType}, Start Time: ${entry.startTime}, Duration: ${entry.duration}`;
                })
                .join('; ');
              setEntries(resultString);
            }}
          >
            utils.appLoadTime.getEntries
          </Button>
          <Button
            data-qa='utils.appLoadTime.mark.btn'
            onClick={() => {
              platformProps.utils.appLoadTime.markStart('iLove1FESoMuchMarkTest');
              setMeasure('Mark started');
            }}
          >
            utils.appLoadTime.markStart
          </Button>
          <Button
            data-qa='utils.appLoadTime.measure.btn'
            onClick={() => {
              const result = platformProps.utils.appLoadTime.markEnd(
                'iLove1FESoMuchMarkTest',
              );

              if (result) {
                setMeasure(`${result.name}  ${result.duration.toString()}`);
              }
            }}
          >
            utils.appLoadTime.markEnd
          </Button>
        </Flex>
        {entries && (
          <div data-qa='utils.appLoadTime.getEntries.result' style={{ marginTop: '20px', maxHeight: '400px', overflow: 'auto' }}>{entries}</div>
        )}

        {measure && (
          <div data-qa='utils.appLoadTime.measure.result' style={{ marginTop: '20px' }}>{measure}</div>
        )}

        {isVisible && (
          <WidgetContainer data-qa='utils.widgets.appLoadTime.result.container'>
            <GetChildWidget isVisible={isVisible} />
          </WidgetContainer>
        )}
      </Card>
    </div>
  );
};
