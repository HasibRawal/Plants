import { View, Text,SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import fonts from '../utils/fonts'

const ProductDetails = () => {

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.topView}>

     </View>
     <View style={styles.bottomView}>
      <View style={styles.bioView}>
        <Text>Plant Bio</Text>
        <Text></Text>

        <Text>Spome Text</Text>

      </View>
      <View style={styles.bioView}>
        <Text>Plant OverView</Text>
        <Text>Some Text</Text>

      </View>

     </View>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles=StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'white',
  }

,
topView:{
    flex:0.6,
    borderBottomEndRadius:250,
    borderBottomStartRadius:80,
    flexDirection:'column',
    backgroundColor:'#9CE5CB',
    opacity:0.8, 
    alignItems:'flex-start'   ,
    rowGap:10
    

},
bottomView:{
  flex:0.4,
    
},
bioView: {
  padding:20,
  rowGap:10
   
  },
  overView:{

    
  },
  bio:{
    fontSize:20,
    color:'black',
    fontFamily:fonts.poppinsRegular
  },
  text:{
    fontSize:32,
    color:'black',
    fontFamily:fonts.philosopherBold
  },
  header:{
    textAlign:'center',
    fontSize:32,
    color:'black',
    fontFamily:fonts.philosopherBold
  },

  price:{
    fontSize:18,
    fontFamily:fonts.poppinsBold,
    color:'black'
  }

})