import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { NavigationRoutes } from './components/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style={"dark"} />
      <NativeBaseProvider>
        <NavigationContainer>
          <NavigationRoutes />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}