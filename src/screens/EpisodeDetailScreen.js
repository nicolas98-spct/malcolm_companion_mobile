import { Image, Pressable, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { AppText } from '../components/Typography';
import { EpisodeCard } from '../components/Cards';
import { getEpisode, getEpisodes } from '../api/client';
import { useAsyncResource } from '../hooks/useAsyncResource';
import { LoadingState } from '../components/States';
import { tap } from '../utils/haptics';

export default function EpisodeDetailScreen({ route }) {
  const id = route?.params?.id || 'graduacion';
  const episodeState = useAsyncResource(() => getEpisode(id), [id]);
  const episodesState = useAsyncResource(getEpisodes, []);
  const episode = episodeState.data;
  if (episodeState.loading || !episode) return <ScreenContainer><View className="pt-10"><LoadingState /></View></ScreenContainer>;
  return <ScreenContainer contentClassName="px-0 pb-8"><View className="bg-blackBlock"><Image source={episode.image} className="h-72 w-full" resizeMode="cover"/><View className="absolute bottom-5 left-5 right-5"><AppText className="text-3xl text-white" weight="heading">{episode.title}</AppText><AppText className="text-white/80">T{episode.season} · EP {episode.episode} · {episode.duration}</AppText><View className="mt-3 flex-row gap-2"><Pressable onPress={tap} className="rounded-full bg-white px-3 py-2"><AppText className="text-[10px] text-ink" weight="heading">♡ Añadir a favoritos</AppText></Pressable><Pressable onPress={tap} className="rounded-full bg-white px-3 py-2"><AppText className="text-[10px] text-ink" weight="heading">↗ Compartir episodio</AppText></Pressable></View></View></View><View className="-mt-6 rounded-t-[32px] bg-appBg px-4 pt-6"><AppText className="text-center text-lg text-ink" weight="heading">TEMPORADA {episode.season}</AppText><AppText className="mb-4 text-center text-xs text-muted">CAPÍTULOS</AppText>{episodesState.data?.map((item)=><EpisodeCard key={item.id} episode={item} dark={false}/>)}</View></ScreenContainer>;
}
