import { Image, Pressable, View } from 'react-native';
import { AppText } from './Typography';
import { tap } from '../utils/haptics';

export function Pill({ label, active }) {
  return <View className={`rounded-full px-3 py-2 ${active ? 'bg-primary' : 'bg-white'}`}><AppText className={`text-[10px] ${active ? 'text-white' : 'text-ink'}`} weight="heading">{label}</AppText></View>;
}

export function EpisodeCard({ episode, onPress, dark = true }) {
  return (
    <Pressable onPress={async () => { await tap(); onPress?.(); }} className={`${dark ? 'bg-blackBlock' : 'bg-white'} mb-4 flex-row rounded-2xl p-3 active:opacity-80`}>
      <Image source={episode.image} className="h-24 w-28 rounded-xl" resizeMode="cover" />
      <View className="ml-3 flex-1 justify-between">
        <View>
          <AppText className={`${dark ? 'text-white' : 'text-ink'} text-sm`} weight="heading">{episode.title}</AppText>
          <AppText className={`${dark ? 'text-gray-300' : 'text-muted'} mt-1 text-[11px]`}>S{episode.season}E{episode.episode} · {episode.duration}</AppText>
          <AppText className={`${dark ? 'text-gray-200' : 'text-muted'} mt-1 text-[11px] leading-4`} numberOfLines={2}>{episode.description}</AppText>
        </View>
        <AppText className="text-xs text-progress" weight="heading">★★★★★ <AppText className={`${dark ? 'text-white' : 'text-ink'} text-xs`}>{episode.rating}</AppText></AppText>
      </View>
    </Pressable>
  );
}

export function CharacterCard({ character, onPress }) {
  return (
    <Pressable onPress={async () => { await tap(); onPress?.(); }} className="mb-3 flex-row items-center rounded-2xl bg-white p-3 active:opacity-80">
      <Image source={character.image} className="h-14 w-14 rounded-full" />
      <View className="ml-3 flex-1">
        <AppText className="text-sm text-ink" weight="heading">{character.name}</AppText>
        <AppText className="mt-1 text-xs text-muted" numberOfLines={1}>{character.role}</AppText>
      </View>
      <AppText className="text-2xl text-muted">›</AppText>
    </Pressable>
  );
}

export function SectionTitle({ title, action }) {
  return <View className="mb-3 mt-5 flex-row items-center justify-between"><AppText className="text-lg text-ink" weight="heading">{title}</AppText>{action ? <AppText className="text-xs text-primary" weight="heading">{action}</AppText> : null}</View>;
}
