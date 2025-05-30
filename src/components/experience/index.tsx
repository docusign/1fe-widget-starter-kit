import { Flex, Card } from 'antd';

import { GetTitle } from './getTitle';
import { SetTitle } from './setTitle';
import { utilSectionStyles } from '../routes/styles/utilsDemo.styles';

/**
 * Experience Utility examples
 */
export const Experience: React.FC = () => {

  return (
    <div css={utilSectionStyles} data-qa='utils.experience.container'>
      <Card title="Experience Utilities" style={{ width: '650px' }}>
        <Flex gap={5} vertical>
          <SetTitle />
          <GetTitle />
        </Flex>
      </Card>
    </div>
  );
};
