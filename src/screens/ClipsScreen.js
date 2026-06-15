import { Image, Pressable, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { AppText } from '../components/Typography';
import { clips } from '../api/mockData';
import { tap } from '../utils/haptics';

export default function ClipsScreen() {
  return <ScreenContainer><View className="pt-8"><AppText className="text-3xl text-ink" weight="heading">Clips</AppText><AppText className="mt-1 text-sm text-muted">Momentos destacados, memes y detrás de cámaras.</AppText>{clips.map((clip)=><Pressable onPress={tap} key={clip.id} className="mt-4 overflow-hidden rounded-3xl bg-white active:opacity-80"><Image source={clip.image} className="h-44 w-full" resizeMode="cover"/><View className="p-4"><AppText className="text-lg text-ink" weight="heading">{clip.title}</AppText><AppText className="mt-1 text-xs text-muted">Contenido visual curado para fans.</AppText></View></Pressable>)}</View></ScreenContainer>;
}
