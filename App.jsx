import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationRoutes } from './components/navigation';
import { theme as customTheme } from './assets/themes/dark';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const theme = extendTheme(customTheme)

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={theme.colors.blueGray[700]} style='light'/>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <NavigationRoutes />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}