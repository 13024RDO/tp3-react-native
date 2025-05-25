import { Image, StyleSheet, Text, View } from 'react-native';

export default function TarjetaImagen({ titulo, url }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.caption}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 20, borderRadius: 10, overflow: 'hidden', backgroundColor: '#eee' },
  image: { width: '100%', height: 200 },
  caption: { padding: 10, fontSize: 16 }
});
