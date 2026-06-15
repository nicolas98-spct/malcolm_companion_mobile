import { ImageBackground, Pressable, Text, View } from 'react-native';
import { impact } from '../utils/haptics';

export default function HomeClipCard({ clip }) {
  return (
    <Pressable
      onPress={() => impact('Light')}
      style={{
        width: 150,
        height: 138,
        marginRight: 12,
        borderRadius: 24,
        overflow: 'hidden',
        backgroundColor: '#111827',
      }}
    >
      <ImageBackground
        source={clip.image}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'flex-end' }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.48)',
            paddingHorizontal: 10,
            paddingBottom: 10,
            paddingTop: 22,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: '#fff',
              fontSize: 15,
              fontWeight: '900',
              lineHeight: 18,
            }}
          >
            {clip.title}
          </Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              color: '#fff',
              backgroundColor: '#d71920',
              borderRadius: 999,
              fontSize: 11,
              fontWeight: '900',
              marginTop: 7,
              overflow: 'hidden',
              paddingHorizontal: 8,
              paddingVertical: 3,
            }}
          >
            {clip.duration}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
