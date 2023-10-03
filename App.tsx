
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Home from './src/screen/home';
import DataTableExample from './src/table/table';

export default function App() {
  return (
    <PaperProvider>
      {/* <Home /> */}
      <DataTableExample />
    </PaperProvider>
  );
}

// AppRegistry.registerComponent(appName, () => App);
