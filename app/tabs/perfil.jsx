import { Image, StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/perfil.png')} style={styles.avatar} />
      <Text style={styles.name}>Roberto Carlos</Text>
      <Text style={styles.email}>Roberto@correo.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold' },
  email: { color: 'gray' }
});
