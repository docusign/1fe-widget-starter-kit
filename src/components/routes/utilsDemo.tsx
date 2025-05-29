import styled from '@emotion/styled';
import { Flex, Typography, Divider } from 'antd';

import { Context } from '../context/context';
import { EventBus } from '../eventBus/eventBus';
import { Experience } from '../experience';
import { LocalAndSessionStorage } from '../localAndSessionStorage';
import { Widgets } from '../widgets';

import { AppLoadTime } from '../appLoadTime/appLoadTime';
import { CustomLoader } from '../customLogger';

const Container = styled.div({
  padding: '48px',
  backgroundColor: 'white',
});

const { Title } = Typography;

export const UtilsDemo = () => {
  return (
    <Container>
      <Title level={1}>1FE Web Utilities Playground</Title>
      <Flex vertical>
        <Context />
        <Divider />
        <Widgets />
        <Divider />
        <LocalAndSessionStorage />
        <Divider />
        <Experience />
        <Divider />
        <EventBus />
        <Divider />
        <AppLoadTime />
        <Divider />
        <CustomLoader />
        <hr />
      </Flex>
    </Container>
  );
};
