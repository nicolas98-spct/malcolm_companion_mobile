import { ActivityIndicator, Text, View } from 'react-native';
export default function Loader() { return <View className="p-8 items-center" style={{ padding: 32, alignItems: 'center' }}><ActivityIndicator color="#d71920" /><Text style={{ marginTop: 10, color: '#666' }}>Cargando Malcolm Verse...</Text></View>; }
