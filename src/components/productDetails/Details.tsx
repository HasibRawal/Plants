import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';

const Details = ({ item }) => {
  return (
    <View style={styles.bottomView}>
      <View style={styles.bioView}>
        <Text style={styles.overView}>Overview</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 5 }}>
            <View>
              <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../../../assets/images/drop.png')} />
            </View>
            <View>
              <Text style={styles.overViewvalue}>{item.water}</Text>
              <Text style={styles.overViewheading}>WATER</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 5 }}>
            <View>
              <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../../../assets/images/sun.png')} />
            </View>
            <View>
              <Text style={styles.overViewvalue}>{item.light}</Text>
              <Text style={styles.overViewheading}>LIGHT</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 5 }}>
            <View>
              <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../../../assets/images/fertilizer.png')} />
            </View>
            <View>
              <Text style={styles.overViewvalue}>{item.fertilizer}</Text>
              <Text style={styles.overViewheading}>FERTILIZER</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bioView}>
        <Text style={styles.overView}>Plant Bio</Text>
        <Text style={styles.bioText}>{item.bio}</Text>
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
 
  bottomView:{
    flex:0.5,
      
  },
  bioView: {
    padding:20,
    rowGap:10
     
    },
    overView:{
      color:'#002140',fontSize:14,fontWeight:'700',
      fontFamily:fonts.poppinsBold
  
      
    },
    headText:{
      fontFamily:fonts.poppinsRegular,
      fontWeight:'500',
      fontSize:20,
      color:'#002140',
  
  
    },
  ratingText:{
      fontFamily:fonts.poppinsRegular,
      fontWeight:'bold',
      fontSize:11,
      color:"#0D986A"
  
    },
    text:{
      fontSize:32,
      color:'black',
      fontFamily:fonts.philosopherBold
    },
  
    tinyLogo: {
      borderWidth:5,
      position:'absolute',
      left:'35%',
      top:'45%',
      width: 300,
      height: 300,
    },
 
    overViewheading:{
    color:"0D986A",
    fontSize:10,
    fontFamily:fonts.poppinsRegular,
    lineHeight:18},
  
    overViewvalue:{color:"#0D986A",
    fontSize:13,
    fontFamily:fonts.poppinsRegular,
    lineHeight:18},
    bioText:{
      color:'#002140',fontSize:15,fontWeight:'400',
      fontFamily:fonts.philosopherRegular
  
      
    }
  
  
  })

export default Details;

