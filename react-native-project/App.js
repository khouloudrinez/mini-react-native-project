import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';

export default function App() {
  const [ready, setReady] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Rubik: require('./assets/fonts/Rubik-Regular.ttf'),
      'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    });
    setReady(true);
  };

  React.useEffect(() => { loadFonts(); }, []);

  if (!ready) return null;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
