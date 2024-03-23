import React,{useState,useEffect} from "react"
import { Text,StyleSheet,View, FlatList, Image,Platform } from "react-native"


const ProductList=()=>{

const[Products,setProducts]=useState([])


const getData=async()=>{

    let data= await fetch('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
    let jsonData= await data.json()

    setProducts(jsonData)



}

useEffect(()=>{

    getData()

    

},[])

const renderItem=({item})=>{

    return (
        <View style={styles.productListConatainer}>
            <View style={styles.leftView}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.price}>${item.price}</Text>
            <Text>Heart icon</Text>
            

            </View>
           

            </View>
            <View style={styles.rightView}>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: item.image,
        }}
      />            
      </View>
       
        </View>
    )
}




return (
  <View style={styles.container}>
<Text >
  Product List
</Text>
<FlatList
data={Products}
renderItem={renderItem}
keyExtractor={(item)=>item.id.toString()}


/>
</View>
)



}

const styles=StyleSheet.create({
  container:{
   flex:1,
   margin:10,
   paddingTop:10
  }

,
productListConatainer:{
    margin:50,
    padding:10,
    borderRadius:20,
    borderWidth:1,
    flexDirection:'row'
}
,
leftView:{
    flex:3

},
rightView:{
    flex:1,
},
tinyLogo: {
    position:'absolute',
    bottom:30,
    left:5,
    width: 100,
    height: 100,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',color:'black'
  },
  price:{
    fontSize:16,
    fontWeight:'bold',color:'black'
  }

})


export default ProductList

