import { Stack, useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { tareas } from '../../../constants/tareas';

export default function Tareas() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/dashboard/tareas/${item.id}`)}
    >
      <Text style={styles.title}>{item.titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Tareas' }} />
      <FlatList
        data={tareas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { padding: 20, backgroundColor: '#f1f1f1', marginBottom: 10, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
});