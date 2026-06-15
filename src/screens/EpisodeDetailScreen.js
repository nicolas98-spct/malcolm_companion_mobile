import { Image, ScrollView, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import { getEpisode, getEpisodes } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';

export default function EpisodeDetailScreen({ route }) {
  const { data, loading } = useApi(async () => ({ episode: await getEpisode(route.params?.id), related: await getEpisodes() }), [route.params?.id]);
  if (loading || !data) return <Loader />;

  const { episode, related } = data;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }} contentContainerStyle={{ paddingBottom: 32 }}>
      <Image source={episode.image} style={{ height: 340, width: '100%' }} />
      <View style={{ padding: 18, marginTop: -36 }}>
        <View style={{ backgroundColor: '#fff', borderRadius: 30, padding: 20 }}>
          <Text style={{ fontSize: 38, fontWeight: '900' }}>{episode.title}</Text>
          <Text style={{ color: '#666', marginTop: 8, lineHeight: 20 }}>{episode.description}</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 16 }}>
            <AppButton title="Añadir a favoritos" style={{ flex: 1, paddingHorizontal: 10 }} />
            <AppButton title="Compartir episodio" variant="secondary" style={{ flex: 1, paddingHorizontal: 10 }} />
          </View>
        </View>
        <View style={{ backgroundColor: '#101010', borderRadius: 24, padding: 18, marginTop: 14 }}>
          <Text style={{ color: '#ffc928', fontSize: 26, fontWeight: '900' }}>Temporada {episode.season}</Text>
          <Text style={{ color: '#fff' }}>Rating ★ {episode.rating}</Text>
        </View>
        <Text style={{ fontSize: 26, fontWeight: '900', marginVertical: 14 }}>Relacionados</Text>
        {related.slice(0, 3).map((item) => (
          <View key={item.id} style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, padding: 10, marginBottom: 10, alignItems: 'center' }}>
            <Image source={item.image} style={{ width: 84, height: 64, borderRadius: 14 }} />
            <Text style={{ fontWeight: '900', fontSize: 16, marginLeft: 12, flex: 1 }}>{item.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
