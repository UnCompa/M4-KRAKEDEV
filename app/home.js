import { FAB, ListItem } from '@rneui/themed';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { FlatList, TouchableOpacity, View } from 'react-native';
import useLaptops from '../hooks/useLaptops';

export default function Home() {

  const { laptops } = useLaptops()
  const router = useRouter();
  const navigation = useNavigation('create');
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

          return <TouchableOpacity onPress={() => {
            console.log(navigation);
            navigation.navigate('create', { data: { laptop: item, isNew: false } });
          }}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{item.marca}</ListItem.Title>
                <ListItem.Subtitle>{item.procesador}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.memoria}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.disco}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        }}
      />
      <FAB
        icon={{ name: 'add', color: 'white' }}
        color='#0af'
        onPress={() => {
          navigation.navigate('create', { isNew: true });
        }}
      />
    </View>
  );
}
