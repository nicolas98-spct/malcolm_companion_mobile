import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from '../context/AuthContext';
import MainTabs from './MainTabs';
import { CharacterDetailScreen, EpisodeDetailScreen, LoginScreen } from '../screens';
const Stack = createNativeStackNavigator();
export default function RootNavigator() { return <AuthProvider><NavigationContainer><Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}><Stack.Screen name="Login" component={LoginScreen} /><Stack.Screen name="MainTabs" component={MainTabs} /><Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} /><Stack.Screen name="EpisodeDetail" component={EpisodeDetailScreen} /></Stack.Navigator></NavigationContainer></AuthProvider>; }
