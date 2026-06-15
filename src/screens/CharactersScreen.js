import { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { charactersFallback, getCharacters } from '../api/api';
import useApi from '../hooks/useApi';
import CharacterCard from '../components/CharacterCard';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';

const chips = ['Familia', 'Escuela', 'Profesores', 'Otros'];
export default function CharactersScreen({ navigation }) {
  const [query, setQuery] = useState(''); const [chip, setChip] = useState('Familia');
  const { data, loading } = useApi(getCharacters, []);
  const characters = data?.length ? data : charactersFallback;
  const list = useMemo(() => characters.filter((c) => c.role === chip && c.name.toLowerCase().includes(query.toLowerCase())), [characters, chip, query]);
  if (loading) return <Loader />;
  return <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#d71920' }}><ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }} contentContainerStyle={{ paddingBottom: 24 }}><View style={{ backgroundColor: '#d71920', paddingHorizontal: 22, paddingBottom: 22, paddingTop: 16, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}><Text style={{ color: '#fff', fontSize: 36, fontWeight: '900' }}>Personajes</Text><TextInput placeholder="Buscar personaje" style={{ backgroundColor: '#fff', borderRadius: 999, padding: 14, marginTop: 14 }} value={query} onChangeText={setQuery} /></View><ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 16 }}>{chips.map((item) => <Pressable key={item} onPress={() => setChip(item)} style={{ backgroundColor: chip === item ? '#101010' : '#fff', borderRadius: 999, paddingVertical: 10, paddingHorizontal: 16, marginRight: 8 }}><Text style={{ color: chip === item ? '#fff' : '#111', fontWeight: '900' }}>{item}</Text></Pressable>)}</ScrollView><View style={{ paddingHorizontal: 16 }}>{list.length ? list.map((character) => <CharacterCard key={character.id} character={character} onPress={() => navigation.navigate('CharacterDetail', { id: character.id })} />) : <EmptyState />}</View></ScrollView></SafeAreaView>;
}
