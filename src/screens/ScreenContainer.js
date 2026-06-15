import { SafeAreaView, ScrollView, View } from 'react-native';

export default function ScreenContainer({ children, className = '', contentClassName = '' }) {
  return (
    <SafeAreaView className={`flex-1 bg-appBg ${className}`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className={`px-4 pb-8 ${contentClassName}`}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
