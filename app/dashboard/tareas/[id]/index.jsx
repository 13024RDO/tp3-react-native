import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { tareas } from '../../../../constants/tareas';

export default function Subtareas() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const tarea = tareas.find((t) => t.id === id);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Subtareas' }} />
      <Text style={styles.heading}>Subtareas de: {tarea?.titulo}</Text>
      <FlatList
        data={tarea?.subtareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => router.push(`/dashboard/tareas/${id}/${item.id}`)}
          >
            <Text>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 15, backgroundColor: '#f5f5f5', marginBottom: 8, borderRadius: 8 }
});