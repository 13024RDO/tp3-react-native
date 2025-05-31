import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function DetalleSubtarea() {
  const route = useRoute();
  const { subtarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text style={styles.text}>Descripción: {subtarea.descripcion}</Text>
      <Text style={styles.text}>Estado: {subtarea.estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  text: { fontSize: 16, marginBottom: 8 },
});
