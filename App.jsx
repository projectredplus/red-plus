import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { NavigationRoutes } from './components/navigation';


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}