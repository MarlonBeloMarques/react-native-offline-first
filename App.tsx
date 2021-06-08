import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, StoreCreator } from 'redux';
import FeedListContainer from './src/containers/FeedListContainer';
import reducer from './src/store/reducers'

export default function App() {

  const createOffline : StoreCreator = offline(offlineConfig);

  const store = createStore(reducer, createOffline);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FeedListContainer />
      </SafeAreaView>
    </Provider>
  );
}
