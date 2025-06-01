import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido</Text>
      <Button title="Entrar al Dashboard" onPress={() => router.push('/dashboard')} />
    </View>
  );
}
