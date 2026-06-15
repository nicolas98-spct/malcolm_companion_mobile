import { Image, Pressable, Text } from 'react-native';
import { impact } from '../utils/haptics';

export default function ClipCard({ clip }) {
  return (
    <Pressable
      className="bg-white rounded-3xl w-full"
      style={{
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 12,
        width: '100%',
      }}
      onPress={() => impact('Light')}
    >
      <Image
        source={clip.image}
        style={{ width: '100%', height: 185, borderRadius: 18 }}
      />
      <Text style={{ fontSize: 20, fontWeight: '900', marginTop: 12, color: '#111827' }}>
        {clip.title}
      </Text>
      <Text style={{ color: '#6b7280', marginTop: 6, lineHeight: 20 }}>
        {clip.description}
      </Text>
      <Text style={{ color: '#d71920', fontWeight: '800', marginTop: 8 }}>
        {clip.duration}
      </Text>
    </Pressable>
  );
}
