import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stack } from "expo-router";


const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
  ;
}
