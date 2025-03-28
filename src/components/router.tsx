import { platformProps } from '@devhub/1fe-shell';
import { Layout, Menu } from 'antd';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Home } from './routes/home';
import { UtilsDemo } from './routes/utilsDemo';
import { WidgetProps } from '../contract';

/**
 * Suggestion: setup the top level routing for your application here
 */
export const Router: React.FC<WidgetProps> = (props) => {
  const navigate = useNavigate();

  const navigate1fe = platformProps.utils.navigation.useNavigate(
    navigate,
    useNavigate,
    useLocation,
  );

  // const t = useTranslate();

  const { Header } = Layout;

  return (
    <>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'contents',
          alignItems: 'center',
        }}
      >
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['0']}
          items={[
            {
              key: 'HOME',
              label: 'Home',
              onClick: () => navigate1fe('/'),
              // 'data-qa': 'wsk.header.button.home',
            },
            {
              key: 'UTILS',
              label: 'Utils',
              onClick: () => navigate1fe('/utils'),
              // 'data-qa': 'wsk.header.button.utils',
            },
          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Routes>
        <Route path='/' element={<Home {...props} />} />
        <Route path='/utils' element={<UtilsDemo />} />
        {/* <Route path='/foo' element={<Foo />} />
        <Route path='/utils' element={<UtilsDemo {...props} />} />
        <Route path='/utils/foo/:id' element={<GetDeepLinked />} /> */}
        {/* <Route
          path='/*'
          element={<h1>{t('Components.Router.RouteHeader')}</h1>}
        /> */}
        <Route path='/*' element={<h1>{'Components.Router.RouteHeader'}</h1>} />
      </Routes>
    </>
  );
};
