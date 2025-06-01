import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { tareas } from '../../../constants/tareas';

export default function DetalleSubtarea() {
  const { id, subtareaId } = useLocalSearchParams();
  const tarea = tareas.find((t) => t.id === id);
  const subtarea = tarea.subtareas.find((s) => s.id === subtareaId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text>Descripción: {subtarea.descripcion}</Text>
      <Text>Estado: {subtarea.estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
