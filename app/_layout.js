import { Stack, useRouter } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function RootLayout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Stack screenOptions={{ headerShown: false }} />

      <View style={styles.navBar}>
        <Pressable style={styles.button} onPress={() => router.push({ pathname: '/', params: { nombre: 'Inicio' } })}>
          <Text style={styles.text}>Inicio</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push({ pathname: '/perfil', params: { nombre: 'Perfil' } })}>
          <Text style={styles.text}>Perfil</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push({ pathname: '/buscar', params: { nombre: 'Buscar' } })}>
          <Text style={styles.text}>Buscar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF', 
    borderTopWidth: 1,
    borderTopColor: '#333',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', 
  },
});