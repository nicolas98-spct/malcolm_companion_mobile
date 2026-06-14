import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CharactersScreen, ClipsScreen, EpisodesScreen, HomeScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personajes' }} />
      <Tab.Screen name="Episodes" component={EpisodesScreen} options={{ title: 'Episodios' }} />
      <Tab.Screen name="Clips" component={ClipsScreen} options={{ title: 'Clips' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
}
