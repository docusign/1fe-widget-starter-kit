import { platformProps } from '@devhub/1fe-shell';
import { Button } from 'antd';

// import { useTranslate } from 'src/locales';
export const PreLoadUrl = () => {
  // const t = useTranslate();
  return (
    <div data-qa='utils.navigation.preloadUrl.container'>
      <Button
        data-qa='utils.navigation.preloadUrl.btn'
        onClick={() =>
          platformProps.utils.navigation.preloadUrl(
            new URL(
              'https://cdn.jsdelivr.net/gh/docusign/mock-cdn-assets/libs/lodash/4.17.21/lodash.js',
            ),
            0,
          )
        }
      >
        {'utils.navigation.preloadUrl'}
        {/* {t('Components.Navigation.PreLoadUrlText')} */}
      </Button>
    </div>
  );
};
