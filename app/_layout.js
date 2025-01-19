import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return <>
    <StatusBar style='light' />
  <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
    </Stack></>
}
