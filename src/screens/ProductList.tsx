import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import fonts from "../utils/fonts";
import { RootStackParamList } from "../navigation/Navigation";

const ProductList = ({ navigation }: { navigation: RootStackParamList }) => {
  const [Products, setProducts] = useState([]);

  const getData = async () => {
    try {
      let data = await fetch(
        "https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q",
      );
      let jsonData = await data.json();

      setProducts(jsonData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetails", { item });
        }}
        style={styles.productListConatainer}
      >
        <View style={styles.leftView}>
          <Text style={styles.text1}>Air Purifier</Text>

          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.priceView}>
            <Text style={styles.price}>${item.price}</Text>

            <Image
              resizeMode="contain"
              style={styles.heartIcon}
              source={require("../../assets/images/Vector1.png")}
            />
          </View>
        </View>
        <View style={styles.rightView}>
          <Image
            resizeMode="stretch"
            style={styles.tinyLogo}
            source={{
              uri: item.image,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Product List</Text>
      </View>
      {Products.length > 0 ? (
        <FlatList
          style={{ marginTop: 10 }}
          data={Products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No Data Available</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },

  productListConatainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 5,
  },
  leftView: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 140,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: "column",
    backgroundColor: "#9CE5CB",
    opacity: 0.8,
    alignItems: "flex-start",
    rowGap: 10,
  },
  rightView: {
    position: "absolute",
    left: "70%",
    bottom: "20%",
  },
  tinyLogo: {
    position: "absolute",
    bottom: 30,
    left: 5,
    width: 120,
    height: 150,
  },
  text1: {
    fontSize: 20,
    color: "black",
    fontFamily: fonts.poppinsRegular,
  },
  text: {
    fontSize: 32,
    color: "black",
    fontFamily: fonts.philosopherBold,
  },
  header: {
    textAlign: "center",
    fontSize: 32,
    color: "black",
    fontFamily: fonts.philosopherBold,
  },

  price: {
    fontSize: 18,
    fontFamily: fonts.poppinsBold,
    color: "black",
  },
  priceView: { flexDirection: "row", columnGap: 50, alignItems: "center" },
  heartIcon: { height: 25, width: 25, tintColor: "black" },
});

export default ProductList;
