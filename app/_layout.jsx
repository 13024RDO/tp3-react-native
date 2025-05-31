import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="screens/Tareas" options={{ title: 'Tareas' }} />
      <Stack.Screen name="screens/Subtareas" options={{ title: 'Subtareas' }} />
      <Stack.Screen name="screens/DetalleSubtarea" options={{ title: 'Detalle de Subtarea' }} />
      {/* Otras pantallas como Login, Inicio, Perfil, etc. */}
    </Stack>
  );
}
