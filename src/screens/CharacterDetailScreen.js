import { Image, ScrollView, Text, View } from 'react-native';
import { getCharacter } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import localImages from '../utils/localImages';

export default function CharacterDetailScreen({ route }) {
  const { data: character, loading } = useApi(() => getCharacter(route.params?.id), [route.params?.id]);
  if (loading || !character) return <Loader />;
  return <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}><View style={{ backgroundColor: '#d71920', paddingTop: 54, padding: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}><Text style={{ color: '#fff', fontSize: 14, fontWeight: '900' }}>← Volver</Text><Text style={{ color: '#fff', fontSize: 38, fontWeight: '900' }}>{character.name}</Text></View><View style={{ padding: 18 }}><Image source={character.image} style={{ width: '100%', height: 330, borderRadius: 32 }} /><View style={{ backgroundColor: '#d71920', borderRadius: 28, padding: 20, marginTop: -34, marginHorizontal: 14 }}><Text style={{ color: '#fff', fontSize: 24, fontWeight: '900' }}>{character.role}</Text><Text style={{ color: '#fff', marginTop: 8, lineHeight: 20 }}>{character.description}</Text></View>{['Perfil', 'Momentos', 'Relaciones'].map((section) => <View key={section} style={{ backgroundColor: '#fff', borderRadius: 24, padding: 18, marginTop: 14 }}><Text style={{ fontSize: 24, fontWeight: '900' }}>{section}</Text><Text style={{ color: '#666', marginTop: 6 }}>{section === 'Momentos' ? character.moments?.join(' · ') : section === 'Relaciones' ? character.relations?.join(' · ') : 'Ficha de companion app con personalidad, conflictos y evolución.'}</Text>{section === 'Momentos' && <Image source={localImages.epGraduacion} style={{ marginTop: 12, height: 120, borderRadius: 18, width: '100%' }} />}</View>)}</View></ScrollView>;
}
