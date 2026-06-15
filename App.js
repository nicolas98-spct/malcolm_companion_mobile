import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RootNavigator } from './src/navigation';

export default function App() {
  const [, setFontsReady] = useState(false);
  useEffect(() => {
    async function prepareFontFallbacks() {
      await import('expo-font').catch(() => null);
      setFontsReady(true);
    }
    prepareFontFallbacks();
  }, []);
  return <><RootNavigator /><StatusBar style="auto" /></>;
}
