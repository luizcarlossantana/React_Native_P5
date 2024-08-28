import { View, Text, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
const Exercicio_02 = () => {
  return (
    <View>
      <Text>Exercicio_02</Text>
      <Button  title='Teste'/>
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
export default Exercicio_02