import { Image, ImageBackground, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import AppButton from '../components/AppButton';
import { useAuth } from '../context/AuthContext';
import { notify } from '../utils/haptics';
import localImages from '../utils/localImages';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const submit = () => {
    if (auth.login(username, password)) { notify('Success'); navigation.replace('MainTabs'); return; }
    notify('Error'); setError('Credenciales demo: unir / unir123');
  };
  return <ImageBackground source={localImages.loginBg} style={{ flex: 1 }} imageStyle={{ opacity: 0.88 }}><KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, justifyContent: 'center', padding: 24 }}><Image source={localImages.logo} resizeMode="contain" style={{ width: 210, height: 88, alignSelf: 'center', marginBottom: 18 }} /><View className="bg-white rounded-3xl p-6" style={{ backgroundColor: '#fff', borderRadius: 30, padding: 24 }}><Text style={{ fontSize: 36, fontWeight: '900', marginBottom: 18 }}>Log in</Text><TextInput className="bg-neutral-100 rounded-full px-5 py-4 mb-3" style={{ backgroundColor: '#f2f2f2', borderRadius: 999, padding: 15, marginBottom: 12 }} placeholder="correo o usuario" value={username} onChangeText={setUsername} autoCapitalize="none" /><TextInput className="bg-neutral-100 rounded-full px-5 py-4 mb-3" style={{ backgroundColor: '#f2f2f2', borderRadius: 999, padding: 15, marginBottom: 12 }} placeholder="contraseña" value={password} onChangeText={setPassword} secureTextEntry />{!!error && <Text style={{ color: '#d71920', marginBottom: 10, fontWeight: '700' }}>{error}</Text>}<AppButton title="Iniciar sesión" onPress={submit} /><AppButton title="Continuar con Google" variant="secondary" className="mt-3" onPress={() => notify('Warning')} /><Text style={{ textAlign: 'center', marginTop: 18, color: '#555' }}>¿No tienes cuenta? <Text style={{ color: '#d71920', fontWeight: '900' }}>Regístrate</Text></Text></View></KeyboardAvoidingView></ImageBackground>;
}
