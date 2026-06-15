import { View } from 'react-native';
import { AppText } from './Typography';

export function LoadingState({ label = 'Cargando contenido...' }) {
  return <View className="rounded-2xl bg-white p-5"><AppText className="text-center text-muted">{label}</AppText></View>;
}

export function EmptyState({ label = 'No hay contenido disponible.' }) {
  return <View className="rounded-2xl bg-white p-5"><AppText className="text-center text-muted">{label}</AppText></View>;
}

export function ErrorState({ label = 'No se pudo cargar la información.' }) {
  return <View className="rounded-2xl bg-white p-5"><AppText className="text-center text-primary" weight="heading">{label}</AppText></View>;
}
