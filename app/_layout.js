import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return <>
    <StatusBar style='light' />
    <Stack
      initialRouteName='index'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackButtonMenuEnabled: true,
        headerBackButtonDisplayMode: "minimal",
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="create" />
    </Stack></>
}
