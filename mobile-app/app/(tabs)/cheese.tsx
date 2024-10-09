import { Text,View, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Pagewww() {
  return (
    <View className="mx-5 my-20" style={makeItPretty.cheesePage}>
      <Text className="border-blue-700 border-2">This is a page about cheese. </Text>
      <Link href="/" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </View>
  )
}

const makeItPretty = StyleSheet.create({
  cheesePage: {
    border: '1px dashed',
    fontVariantCaps: 'all-small-caps',

  }
})