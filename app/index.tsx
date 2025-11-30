import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>welcome to my app .</Text>
      <Link href="/searchScreen"> go to other page </Link>
    </View>
  );
}
