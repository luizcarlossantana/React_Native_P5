import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

const Exercicio_04 = () => {
const lista = ["banana","maçã","uva","manga"];



  return (
    <View style={styles.container}>
      <Text>Exercicio_04</Text>
      {lista.map(item=>
        <Text>{item}</Text>

      )}
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
export default Exercicio_04