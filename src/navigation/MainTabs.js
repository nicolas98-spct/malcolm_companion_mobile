import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CharactersScreen, ClipsScreen, EpisodesScreen, HomeScreen, LoginScreen, ProfileScreen } from '../screens';
import { useAuth } from '../context/AuthContext';
const Tab = createBottomTabNavigator();
function ProtectedProfile(props){ const {user}=useAuth(); return user ? <ProfileScreen {...props}/> : <LoginScreen {...props}/>; }
const icons={Home:'⌂',Characters:'●',Episodes:'★',Clips:'▶',Profile:'◉'};
export default function MainTabs() { return <Tab.Navigator screenOptions={({route})=>({headerShown:false,tabBarActiveTintColor:'#d71920',tabBarInactiveTintColor:'#777',tabBarStyle:{height:72,borderTopWidth:0,elevation:10},tabBarLabelStyle:{fontWeight:'800',marginBottom:8},tabBarIcon:({color})=><Text style={{color,fontSize:22}}>{icons[route.name]}</Text>})}><Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} /><Tab.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personajes' }} /><Tab.Screen name="Episodes" component={EpisodesScreen} options={{ title: 'Episodios' }} /><Tab.Screen name="Clips" component={ClipsScreen} options={{ title: 'Clips' }} /><Tab.Screen name="Profile" component={ProtectedProfile} options={{ title: 'Perfil' }} /></Tab.Navigator>; }
