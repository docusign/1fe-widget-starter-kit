import { platformProps } from '@devhub/1fe-shell';
import { Button } from 'antd';

// import { useTranslate } from 'src/locales';
export const GetRoute = () => {
  // const t = useTranslate();
  return (
    <div data-qa='utils.navigation.getRoute.container'>
      <Button
        data-qa='utils.navigation.getRoute.btn'
        onClick={() => {
          const route = platformProps.utils.navigation.getRoute();
          window.alert(route);
        }}
      >
        {'utils.navigation.getRoute'}
        {/* {t('Components.Navigation.GetRouteText')} */}
      </Button>
      <Button
        data-qa='utils.navigation.getRoute.excludeParams.btn'
        onClick={() => {
          const route = platformProps.utils.navigation.getRoute(true);
          window.alert(route);
        }}
      >
        {'utils.navigation.getRoute(true)'}
        {/* {t('Components.Navigation.GetRouteTrueText')} */}
      </Button>
    </div>
  );
};
