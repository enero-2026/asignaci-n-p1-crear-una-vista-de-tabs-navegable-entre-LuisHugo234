import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#007AFF',
      tabBarStyle: { backgroundColor: '#fff' }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
        }}
        initialParams={{ nombre: 'Inicio' }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
        }}
        initialParams={{ nombre: 'Perfil' }}
      />
      <Tabs.Screen
        name="buscar"
        options={{
          title: 'Buscar',
        }}
        initialParams={{ nombre: 'Buscar' }}
      />
    </Tabs>
  );
}