import React from "react"
import { Text,StyleSheet,View } from "react-native"
import ProductList from "./src/screens/ProductList"


const App=()=>{


return (
  <View style={styles.container}>
    <ProductList/>

</View>
)



}

const styles=StyleSheet.create({
  container:{
    flex:1,
   
  }
})


export default App

