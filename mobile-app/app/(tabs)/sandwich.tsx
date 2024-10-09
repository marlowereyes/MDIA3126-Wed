import { Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function Page() {
  return (
  <View>
      <Text className="mx-5 my-20">This is a page about sandwiches. </Text>
      <Link href="/">My Index Page</Link>
      <Link href="/cheese">My Cheese paage</Link>
  </View>
  )
}
