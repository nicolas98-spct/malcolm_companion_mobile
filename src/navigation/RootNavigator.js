import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabs from './MainTabs';
import { CharacterDetailScreen, EpisodeDetailScreen, LoginScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={{ title: 'Personaje' }} />
        <Stack.Screen name="EpisodeDetail" component={EpisodeDetailScreen} options={{ title: 'Episodio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
