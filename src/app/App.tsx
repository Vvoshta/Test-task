import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { CompanyListPage } from '../components/Company';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CompanyListPage />
    </Provider>
  );
};

export default App;
