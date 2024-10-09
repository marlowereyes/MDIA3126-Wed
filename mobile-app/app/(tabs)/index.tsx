import { View } from 'react-native';
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View className="mx-5 my-20">
      <Link href="/sandwich">Sandwich</Link>
      <Link href="/cheese">Cheese</Link>
    </View>
  )
}
