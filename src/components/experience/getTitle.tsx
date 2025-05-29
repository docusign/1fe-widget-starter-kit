import { platformProps } from '@1fe/shell';
import { Button } from 'antd';

export const GetTitle = () => {
  return (
    <div>
      <Button
        data-qa='utils.experience.title.get'
        onClick={() => window.alert(platformProps.utils.experience.title.get())}
      >
        utils.experience.title.get
      </Button>
    </div>
  );
};
