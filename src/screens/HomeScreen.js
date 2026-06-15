import { Image, Pressable, TextInput, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { AppText } from '../components/Typography';
import { EpisodeCard, SectionTitle } from '../components/Cards';
import { clips, episodes, user } from '../api/mockData';
import { images } from '../utils/assets';
import { tap } from '../utils/haptics';

export default function HomeScreen({ navigation }) {
  return (
    <ScreenContainer className="bg-appBg" contentClassName="px-0 pb-8">
      <View className="rounded-b-[32px] bg-primary px-5 pb-8 pt-10">
        <View className="flex-row items-center justify-between"><Image source={images.logo} className="h-12 w-28" resizeMode="contain" /><Image source={user.avatar} className="h-12 w-12 rounded-full border-2 border-white" /></View>
        <AppText className="mt-4 text-xs text-white/80">Bienvenido</AppText><AppText className="text-xl text-white" weight="heading">Juan Armando</AppText>
        <TextInput placeholder="Buscar..." placeholderTextColor="#888" className="mt-4 h-10 rounded-full bg-white/90 px-5 text-xs" />
        <Pressable onPress={async()=>{await tap(); navigation.navigate('EpisodeDetail',{id:episodes[0].id});}} className="mt-4 overflow-hidden rounded-3xl bg-blackBlock active:opacity-90">
          <Image source={episodes[0].image} className="h-40 w-full" resizeMode="cover" />
          <View className="absolute bottom-0 left-0 right-0 bg-black/55 p-3"><AppText className="text-xs text-white/70">Continuar viendo</AppText><AppText className="text-white" weight="heading">{episodes[0].title}</AppText></View>
        </Pressable>
      </View>
      <View className="-mt-4 px-4">
        <View className="flex-row gap-3">
          <Pressable onPress={()=>navigation.navigate('Characters')} className="flex-1 overflow-hidden rounded-2xl bg-white active:opacity-80"><Image source={images.malcolm} className="h-28 w-full"/><AppText className="p-3 text-ink" weight="heading">Personajes</AppText></Pressable>
          <Pressable onPress={()=>navigation.navigate('Episodes')} className="flex-1 overflow-hidden rounded-2xl bg-white active:opacity-80"><Image source={images.family} className="h-28 w-full"/><AppText className="p-3 text-ink" weight="heading">Episodios</AppText></Pressable>
        </View>
        <SectionTitle title="Clips Destacados" />
        <View className="flex-row gap-2 rounded-2xl bg-soft p-2">{clips.map((clip)=><Image key={clip.id} source={clip.image} className="h-16 flex-1 rounded-xl" />)}</View>
        <View className="mt-5 rounded-2xl bg-white p-4"><AppText className="text-primary" weight="heading">Progreso {user.progress}%</AppText><AppText className="text-xs text-muted">{user.watched} capítulos de 350</AppText><View className="mt-3 h-3 rounded-full bg-blackBlock"><View className="h-3 rounded-full bg-progress" style={{ width: `${user.progress}%` }} /></View></View>
      </View>
    </ScreenContainer>
  );
}
