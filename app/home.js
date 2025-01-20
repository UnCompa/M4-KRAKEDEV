import { FAB, ListItem } from '@rneui/themed';
import { Stack, useRouter } from 'expo-router';
import { FlatList, View } from 'react-native';
import useLaptops from '../hooks/useLaptops';

export default function Home() {

  const { laptops } = useLaptops()
  const router = useRouter();
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#0af' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Laptops',
        }}
      />
        <FlatList
          data={laptops}
          renderItem={({ item }) => {
            console.log(item);
            
            return <ListItem>
              <ListItem.Content>
                <ListItem.Title>{item.marca}</ListItem.Title>
                <ListItem.Subtitle>{item.procesador}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.memoria}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.disco}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          }}
      />
      <FAB
        icon={{ name: 'add', color: 'white' }}
        color='#0af'
        onPress={() => {
          router.navigate('/create')
        }}
      />
    </View>
  );
}
