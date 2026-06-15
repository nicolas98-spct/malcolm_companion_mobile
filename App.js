import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

import { RootNavigator } from './src/navigation';
import { AppText } from './src/components/Typography';
import { expectedAssetPaths } from './src/utils/assets';

const fontAssets = {
  // Expected local font files, intentionally not committed in this PR:
  // NeueHaasGrotesk: require('./assets/fonts/NeueHaasGrotesk.ttf'),
  // HelveticaNeueBold: require('./assets/fonts/HelveticaNeueBold.ttf'),
};

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-appBg px-6">
        <AppText className="text-center text-muted">
          Cargando Malcolm Verse... Fuentes esperadas: {expectedAssetPaths.fonts.neueHaasGrotesk} y {expectedAssetPaths.fonts.helveticaNeueBold}
        </AppText>
      </View>
    );
  }

  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}
