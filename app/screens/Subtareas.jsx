import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Subtareas() {
  const route = useRoute();
  const navigation = useNavigation();
  const { tarea } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('DetalleSubtarea', { subtarea: item })}
    >
      <Text style={styles.title}>{item.titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Subtareas de: {tarea.titulo}</Text>
      <FlatList
        data={tarea.subtareas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 15, backgroundColor: '#e0f7fa', marginBottom: 10, borderRadius: 8 },
  title: { fontSize: 16 },
});
