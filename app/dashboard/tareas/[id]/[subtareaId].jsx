import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { tareas } from '../../../../constants/tareas';

export default function DetalleSubtarea() {
  const { id, subtareaId } = useLocalSearchParams();

  const tarea = tareas.find((t) => t.id === id);
  const subtarea = tarea?.subtareas.find((s) => s.id === subtareaId);

  if (!subtarea) {
    return <Text>Subtarea no encontrada</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Detalle de Subtarea' }} />
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text style={styles.description}>{subtarea.descripcion}</Text>
      <Text style={styles.status}>Estado: {subtarea.estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 10 },
  status: { fontSize: 16, fontStyle: 'italic' }
});