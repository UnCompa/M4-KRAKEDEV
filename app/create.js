import { Button, Input } from '@rneui/themed';
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import useLaptops from '../hooks/useLaptops';

export default function Create() {

  const { createLaptop: laptopCreate, status } = useLaptops()
  const [marca, setMarca] = useState('')
  const [procesador, setProcesador] = useState('')
  const [memoria, setMemoria] = useState('')
  const [disco, setDisco] = useState('')
  const router = useRouter()
  const createLaptop = () => {
    const data = {
      marca,
      procesador,
      memoria,
      disco,
    }
    console.log(data);
    laptopCreate(data)
  }
  useEffect(() => {
    if (status === true) {
      Alert.alert('Exito', 'Laptop creada correctamente', [
        {
          text: 'Continuar',
          onPress: () => router.back('home'),
          style: 'default',
        },
      ],)
    } else if (status === false){
      Alert.alert('Error', 'Ocurrio algo al crear la laptop', [
        {
          text: 'Continuar',
          onPress: () => router.back('home'),
          style: 'cancel',
        },
      ])
    }
  }, [status])
  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen
        options={{
          title: 'Create laptop',
          headerStyle: { backgroundColor: '#0af' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackButtonMenuEnabled: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Input
        placeholder='Marca'
        value={marca}
        onChangeText={(text) => {
          setMarca(text)
        }}
      />
      <Input
        placeholder='Procesador'
        value={procesador}
        onChangeText={(text) => {
          setProcesador(text)
        }}
      />
      <Input
        placeholder='Memoria'
        value={memoria}
        onChangeText={(text) => {
          setMemoria(text)
        }}
      />
      <Input
        placeholder='Disco'
        value={disco}
        onChangeText={(text) => {
          setDisco(text)
        }}
      />
      <Button
        title="Guardar"
        onPress={createLaptop}
      />
    </View>
  );
}
