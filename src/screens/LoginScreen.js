import { Pressable, StyleSheet, Text } from 'react-native';

import ScreenContainer from './ScreenContainer';

export default function LoginScreen({ navigation }) {
  return (
    <ScreenContainer title="Login" description="Pantalla temporal de acceso.">
      <Pressable style={styles.button} onPress={() => navigation.replace('MainTabs')}>
        <Text style={styles.buttonText}>Entrar a MainTabs</Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
