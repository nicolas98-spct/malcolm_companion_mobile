import { Image, ImageBackground, Pressable, TextInput, View } from 'react-native';
import { useState } from 'react';
import { AppText } from '../components/Typography';
import { images } from '../utils/assets';
import { success, tap } from '../utils/haptics';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('unir');
  const [password, setPassword] = useState('unir123');
  const [error, setError] = useState('');

  async function handleLogin() {
    await tap();
    if (username.trim() === 'unir' && password === 'unir123') {
      await success();
      navigation.replace('MainTabs');
      return;
    }
    setError('Usa unir / unir123 para entrar en modo demo.');
  }

  return (
    <ImageBackground source={images.collage} className="flex-1" resizeMode="cover">
      <View className="flex-1 bg-black/45 px-5 pt-14">
        <Image source={images.logo} className="mx-auto h-24 w-48" resizeMode="contain" />
        <View className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
          <AppText className="text-3xl text-ink" weight="heading">Log in</AppText>
          <AppText className="mt-4 text-xs text-muted">Correo</AppText>
          <TextInput value={username} onChangeText={setUsername} autoCapitalize="none" className="mt-1 h-11 rounded-xl bg-appBg px-4" />
          <AppText className="mt-3 text-xs text-muted">Contraseña</AppText>
          <TextInput value={password} onChangeText={setPassword} secureTextEntry className="mt-1 h-11 rounded-xl bg-appBg px-4" />
          {error ? <AppText className="mt-3 text-xs text-primary">{error}</AppText> : null}
          <Pressable onPress={handleLogin} className="mt-5 h-11 items-center justify-center rounded-full bg-primary active:opacity-80">
            <AppText className="text-xs text-white" weight="heading">Iniciar sesión</AppText>
          </Pressable>
          <AppText className="my-3 text-center text-xs text-muted">o</AppText>
          <Pressable onPress={tap} className="h-11 flex-row items-center justify-center rounded-full border border-soft bg-white active:opacity-80">
            <AppText className="mr-2 text-base text-primary" weight="heading">G</AppText><AppText className="text-xs text-ink">Continuar con Google</AppText>
          </Pressable>
          <AppText className="mt-4 text-right text-xs text-primary">Regístrate</AppText>
        </View>
      </View>
    </ImageBackground>
  );
}
