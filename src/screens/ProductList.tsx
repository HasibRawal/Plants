import React,{useState,useEffect} from "react"
import { Text,StyleSheet,View, FlatList, Image,Platform, TouchableOpacity } from "react-native"
import fonts from "../utils/fonts"


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
        <TouchableOpacity onPress={()=>{}} style={styles.productListConatainer}>
            <View style={styles.leftView}>
            <Text style={styles.text1}>Air Purifier</Text>

                <Text style={styles.text}>{item.name}</Text>
             <View style={{flexDirection:'row',columnGap:50,padding:10,alignItems:'center'}}>
                 <Text style={styles.price}>${item.price}</Text>
                 
                 <Image resizeMode='contain' style={{height:25,width:25, tintColor:'black'}} source={require('../../assets/images/Vector1.png')}/>
            </View>
            </View>
            <View style={styles.rightView}>
                    <Image
                    resizeMode='stretch'
                style={styles.tinyLogo}
                source={{
                uri: item.image,
                }}
            />            
      </View>
       
        </TouchableOpacity>
    )
}




return (
  <View style={styles.container}>
<Text style={styles.text} >
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
   backgroundColor:'white'
  }

,
productListConatainer:{
    paddingTop:10,
  
rowGap:10
}
,
leftView:{
    flex:4,
    margin:50,
    height:177,
    padding:20,
    borderTopLeftRadius:30,
    borderTopRightRadius:100,
    borderBottomEndRadius:20,
    borderTopStartRadius:35,
    borderBottomStartRadius:30,
    flexDirection:'column',
    backgroundColor:'#9CE5CB',
    opacity:0.8,    
    

},
rightView:{
    flex:1,
    position:'absolute',
    left:'60%',
    bottom:'40%',
    
},
tinyLogo: {
    position:'absolute',
    bottom:30,
    left:5,
    width: 120,
    height: 150,
  },
  text1:{
    fontSize:14,
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
    fontFamily:fonts.poppinsRegular,color:'black'
  }

})


export default ProductList

