import { platformProps } from '@1fe/shell';
import styled from '@emotion/styled';
import { Button, Input } from 'antd';
import { useState } from 'react';

const NavigateWithTextboxContainer = styled.div({
  display: 'flex',
});

export const SetTitle = () => {
  const [title, setTitle] = useState<string>('Hello World');

  return (
    <NavigateWithTextboxContainer>
        <Input
          data-qa='utils.experience.set-title.normal.input'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Button
          data-qa='utils.experience.title.set'
          onClick={() => platformProps.utils.experience.title.set(title)}
        >
          utils.experience.title.set
        </Button>
    </NavigateWithTextboxContainer>
  );
};
