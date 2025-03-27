import { platformProps } from '@devhub/1fe-shell';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';

import { createStore } from './store';

/**
 * Wrap the application code in the various app level providers
 */
// TODO: strongly type
const withProvider = (Component) =>
  function WidgetProvider() {
    // Create a new store for each instance of the widget
    // Automatically is destroyed when the widget is unmounted
    const [store] = useState(createStore);

    return (
      <Provider store={store}>
        {/* @ts-ignore */}
        <UNSAFE_LocationContext.Provider value={null}>
          <MemoryRouter
            initialEntries={[platformProps.utils.navigation.getRoute()]}
          >
            <Component />
          </MemoryRouter>
        </UNSAFE_LocationContext.Provider>
      </Provider>
    );
  };

export default withProvider;
