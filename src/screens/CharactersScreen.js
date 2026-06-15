import { TextInput, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { AppText } from '../components/Typography';
import { CharacterCard, Pill } from '../components/Cards';
import { getCharacters } from '../api/client';
import { useAsyncResource } from '../hooks/useAsyncResource';
import { LoadingState, ErrorState } from '../components/States';

export default function CharactersScreen({ navigation }) {
  const { data, loading, error } = useAsyncResource(getCharacters, []);
  return <ScreenContainer contentClassName="px-0 pb-8"><View className="bg-primary px-5 pb-8 pt-10"><AppText className="text-2xl text-white" weight="heading">Personajes</AppText></View><View className="-mt-5 px-4"><TextInput placeholder="Buscar personaje" className="h-11 rounded-full bg-soft px-5 text-xs"/><AppText className="mt-3 text-xs text-muted">Filtrar por categoría</AppText><View className="my-3 flex-row gap-2"><Pill label="Familia" active/><Pill label="Escuela" active/><Pill label="Profesores" active/><Pill label="Otros" active/></View><AppText className="mb-3 mt-2 text-base text-ink" weight="heading">Listado de personajes</AppText>{loading ? <LoadingState/> : error ? <ErrorState/> : data.map((character)=><CharacterCard key={character.id} character={character} onPress={()=>navigation.navigate('CharacterDetail',{id:character.id})}/>)}</View></ScreenContainer>;
}
