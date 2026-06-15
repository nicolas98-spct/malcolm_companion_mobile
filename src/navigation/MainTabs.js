import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppText } from '../components/Typography';
import { CharactersScreen, ClipsScreen, EpisodesScreen, HomeScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();
const icons = { Home: '⌂', Characters: '◎', Episodes: '▷', Clips: '✦', Profile: '♡' };

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({ headerShown: false, tabBarActiveTintColor: '#F44336', tabBarInactiveTintColor: '#A0A0A0', tabBarStyle: { height: 62, paddingTop: 8, paddingBottom: 8, borderTopWidth: 0, elevation: 8 }, tabBarIcon: ({ color }) => <AppText style={{ color, fontSize: 18 }} weight="heading">{icons[route.name]}</AppText>, tabBarLabelStyle: { fontSize: 10 } })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personajes' }} />
      <Tab.Screen name="Episodes" component={EpisodesScreen} options={{ title: 'Episodios' }} />
      <Tab.Screen name="Clips" component={ClipsScreen} options={{ title: 'Clips' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
}
