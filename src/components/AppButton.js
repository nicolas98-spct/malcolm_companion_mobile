import { Pressable, Text } from 'react-native';
import { impact } from '../utils/haptics';

export default function AppButton({ title, onPress, variant = 'primary', className = '', style, textStyle }) {
  const primary = variant === 'primary';
  return (
    <Pressable
      className={`rounded-full px-5 py-4 items-center ${primary ? 'bg-malcolm-red' : 'bg-white border border-neutral-200'} ${className}`}
      style={[{ borderRadius: 999, paddingVertical: 14, paddingHorizontal: 20, alignItems: 'center', backgroundColor: primary ? '#d71920' : '#ffffff', borderWidth: primary ? 0 : 1, borderColor: '#e5e5e5' }, style]}
      onPress={() => { impact('Light'); onPress?.(); }}
    >
      <Text className={primary ? 'text-white font-title' : 'text-neutral-900 font-title'} style={[{ color: primary ? '#fff' : '#111', fontWeight: '800', fontSize: 15, textAlign: 'center' }, textStyle]}>{title}</Text>
    </Pressable>
  );
}
