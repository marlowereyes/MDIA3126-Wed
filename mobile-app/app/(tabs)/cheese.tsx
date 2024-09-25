import { Text,View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Pagewww() {
  return (
    <View>
      <Text>This is a page about cheese. </Text>
      <Link href="/" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </View>
  )
}
