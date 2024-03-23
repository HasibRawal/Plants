import React from "react"
import { Text,StyleSheet,View, SafeAreaView } from "react-native"
import ProductList from "./src/screens/ProductList"


const App=()=>{


return (
  <SafeAreaView style={styles.container}>
    <ProductList/>

</SafeAreaView>
)



}

const styles=StyleSheet.create({
  container:{
    flex:1,
   
  }
})


export default App

