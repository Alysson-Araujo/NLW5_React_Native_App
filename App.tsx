import React from 'react';
import { Welcome } from './src/pages/Welcome';



/* 
export default function App() {
  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>
        NLW#5
      </Text>
    </View>
  )
}
 */
/**
 * 
 * o fragmento <> </> serve para empacotar uma série de  elementos e devolver em um só pacote e 
 * tem 0 impácto visual Ou usar no lugar dele o <View> 
 */


// é o mesmo que fazer o que está abaixo
export default function App() {
  return (
    <Welcome />
  )
}
/* 
const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
}) */