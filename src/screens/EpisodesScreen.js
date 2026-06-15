import { TextInput, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { AppText } from '../components/Typography';
import { EpisodeCard, Pill } from '../components/Cards';
import { getEpisodes } from '../api/client';
import { useAsyncResource } from '../hooks/useAsyncResource';
import { LoadingState, ErrorState } from '../components/States';

export default function EpisodesScreen({ navigation }) {
  const { data, loading, error } = useAsyncResource(getEpisodes, []);
  return <ScreenContainer><View className="pt-8"><AppText className="text-3xl text-ink" weight="heading">Favoritos ♡</AppText><TextInput placeholder="Buscar episodio" className="mt-4 h-10 rounded-full bg-soft px-5 text-xs"/><AppText className="mb-2 mt-4 text-xs text-muted">Filtro</AppText><View className="mb-5 flex-row gap-2"><Pill label="Temporada" active/><Pill label="Más vistas" active/><Pill label="Más recientes" active/></View>{loading ? <LoadingState/> : error ? <ErrorState/> : data.map((episode)=><EpisodeCard key={episode.id} episode={episode} onPress={()=>navigation.navigate('EpisodeDetail',{id:episode.id})}/>)}</View></ScreenContainer>;
}
