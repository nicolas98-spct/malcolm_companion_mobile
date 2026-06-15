import { Image, Pressable, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { AppText } from '../components/Typography';
import { CharacterCard, SectionTitle } from '../components/Cards';
import { getCharacter, getCharacters } from '../api/client';
import { useAsyncResource } from '../hooks/useAsyncResource';
import { LoadingState } from '../components/States';
import { episodes } from '../api/mockData';
import { tap } from '../utils/haptics';

export default function CharacterDetailScreen({ route, navigation }) {
  const id = route?.params?.id || 'malcolm';
  const { data: character, loading } = useAsyncResource(() => getCharacter(id), [id]);
  const { data: list } = useAsyncResource(getCharacters, []);
  if (loading || !character) return <ScreenContainer><View className="pt-10"><LoadingState /></View></ScreenContainer>;
  const related = list?.find((item) => item.id !== character.id);
  return <ScreenContainer contentClassName="px-0 pb-8"><View className="bg-primary px-4 pb-7 pt-10"><View className="flex-row items-center"><Pressable onPress={()=>navigation.goBack()} className="mr-2 rounded-full bg-white/20 px-3 py-1"><AppText className="text-white">‹</AppText></Pressable><AppText className="text-white" weight="heading">{character.name}</AppText></View></View><View className="px-4"><View className="-mt-4 flex-row items-center rounded-3xl bg-white p-4"><Image source={character.image} className="h-28 w-28 rounded-full"/><View className="ml-4 flex-1 rounded-2xl bg-primary p-4"><AppText className="text-xl text-white" weight="heading">{character.name}</AppText><AppText className="mt-1 text-xs text-white/90">{character.role}</AppText></View></View><View className="my-4 flex-row justify-center gap-2"><Pressable onPress={tap} className="rounded-full bg-primary px-4 py-2"><AppText className="text-xs text-white" weight="heading">Perfil</AppText></Pressable><Pressable onPress={tap} className="rounded-full bg-white px-4 py-2"><AppText className="text-xs text-muted">Momentos</AppText></Pressable><Pressable onPress={tap} className="rounded-full bg-white px-4 py-2"><AppText className="text-xs text-muted">Relaciones</AppText></Pressable></View><View className="rounded-2xl bg-white p-4"><AppText className="text-sm text-ink" weight="heading">Perfil</AppText><AppText className="mt-2 text-xs leading-5 text-muted">{character.description} Su historia aporta humor, conflicto y corazón a una familia que nunca funciona como debería.</AppText></View><SectionTitle title="Momentos destacados"/><View className="flex-row gap-2 rounded-2xl bg-blackBlock p-3">{episodes.map((episode)=><Image key={episode.id} source={episode.image} className="h-20 flex-1 rounded-xl" />)}</View>{related ? <><SectionTitle title="Relaciones"/><CharacterCard character={related} onPress={()=>navigation.setParams({ id: related.id })}/></> : null}</View></ScreenContainer>;
}
