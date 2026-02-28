import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Pantalla() {
  const { nombre } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre || 'Perfil'}</Text>
      <Text style={styles.subtitle}>( ´･･)ﾉ(._.`)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#121212'
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#FFFFFF'
  },
  subtitle: { 
    fontSize: 18, 
    color: '#BBBBBB', 
    marginTop: 10 
  }
});