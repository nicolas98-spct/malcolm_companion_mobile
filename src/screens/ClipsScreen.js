import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getClips } from '../api/api';
import useApi from '../hooks/useApi';
import ClipCard from '../components/ClipCard';
import Loader from '../components/Loader';

export default function ClipsScreen() {
  const { data, loading } = useApi(getClips, []);

  if (loading) return <Loader />;

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f1f1f1' }}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 18,
          paddingBottom: 110,
        }}
      >
        <View style={{ backgroundColor: '#d71920', borderRadius: 30, padding: 20, marginBottom: 18 }}>
          <Text style={{ color: '#fff', fontSize: 36, fontWeight: '900' }}>
            Clips destacados
          </Text>
          <Text style={{ color: '#fff', marginTop: 6 }}>
            Momentos rápidos para revivir el Malcolm Verse.
          </Text>
        </View>

        <View style={{ width: '100%' }}>
          {data.map((clip) => (
            <View key={clip.id} style={{ width: '100%', marginBottom: 16 }}>
              <ClipCard clip={clip} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
