import { ScrollView, StyleSheet } from 'react-native';
import TarjetaImagen from '../../components/TarjetaImagen';

export default function Galeria() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TarjetaImagen titulo="Atardecer" url="https://picsum.photos/id/1015/400/200" />
      <TarjetaImagen titulo="Montañas" url="https://picsum.photos/id/1011/400/200" />
      <TarjetaImagen titulo="Ciudad" url="https://picsum.photos/id/1012/400/200" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 }
});
