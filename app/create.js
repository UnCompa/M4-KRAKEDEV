import { Button, Input } from '@rneui/themed';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import useLaptops from '../hooks/useLaptops';

export default function Create() {

  const { createLaptop: laptopCreate, status, updateLaptops, updateStatus } = useLaptops()
  const [id, setId] = useState('')
  const [marca, setMarca] = useState('')
  const [procesador, setProcesador] = useState('')
  const [memoria, setMemoria] = useState('')
  const [disco, setDisco] = useState('')
  const router = useRouter()
  const navigation = useNavigation()
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
  const handleUpdateLaptop = () => {
    const data = {
      marca,
      procesador,
      memoria,
      disco,
    }
    updateLaptops(id, data)
  }
  useEffect(() => {
    console.warn(navigation.getState().routes[1].params);

    if (navigation.getState().routes[1].params.data.isNew === false) {
      const { marca, procesador, memoria, disco, id } = navigation.getState().routes[1].params.data.laptop
      console.log('Actualizando');
      setId(id)
      setMarca(marca)
      setProcesador(procesador)
      setMemoria(memoria)
      setDisco(disco)
    }
  }, [])
  useEffect(() => {
    if (status === true) {
      Alert.alert('Exito', 'Laptop creada correctamente', [
        {
          text: 'Continuar',
          onPress: () => router.back('home'),
          style: 'default',
        },
      ],)
    } else if (status === false) {
      Alert.alert('Error', 'Ocurrio algo al crear la laptop', [
        {
          text: 'Continuar',
          onPress: () => router.back('home'),
          style: 'cancel',
        },
      ])
    }
    if (updateStatus === true) {
      Alert.alert('Exito', 'Laptop actualizada correctamente', [
        {
          text: 'Continuar',
          onPress: () => router.back('home'),
          style: 'default',
        },
      ],)
    } else if (updateStatus === false) {
      Alert.alert('Error', 'Ocurrio algo al actualizar la laptop', [
        {
          text: 'Continuar',
          onPress: () => router.back('home'),
          style: 'cancel',
        },
      ])
    }
  }, [status, updateStatus])
  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen
        options={{
          title: navigation.getState().routes[1].params.data.isNew ? 'Crear laptop' : 'Actualizar laptop',
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
      {
        navigation.getState().routes[1].params.data.isNew ? <Button
          title={'Guardar'}
          onPress={createLaptop}
        /> : <Button
          title={'Actualizar'}
            onPress={handleUpdateLaptop}
        />
      }

    </View>
  );
}
