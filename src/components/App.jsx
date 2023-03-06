import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from '../modules/Navbar/Navbar';

import UserRoutes from '../UserRoutes';

import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-06-phonebook">
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
