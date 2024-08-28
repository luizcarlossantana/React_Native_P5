import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

const Exercicio_03 = () => {

const [texto, setTexto] = useState('')


  return (
    <View style={styles.container}>
      <Text>Exercicio_03</Text>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder='Digite algo aqui...'
      />
      <Text>Você Digitou: {texto}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Exercicio_03