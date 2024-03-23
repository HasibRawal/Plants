import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import fonts from "../../utils/fonts";

const ProductData = ({ item }) => {
  return (
    <View style={styles.topView}>
      <Image
        resizeMode="stretch"
        style={styles.tinyLogo}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-around",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.headText}>Air Purifier</Text>
        </View>

        <View
          style={styles.ratingConatiner}
        >
          <View>
            <Image
              resizeMode="contain"
              tintColor={"#0D986A"}
              style={{ height: 15, width: 15 }}
              source={require("../../../assets/images/star.png")}
            />
          </View>
          <View>
            <Text style={styles.ratingText}>4.8</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column", rowGap: 20 }}>
        <Text style={styles.productTitle}>{item.name}</Text>
        <View>
          <Text style={styles.priceTitle}>Price</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View>
          <Text style={styles.sizeTitle}>Size</Text>
          <Text style={styles.price}>{item.size}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  topView: {
    flex: 0.5,
    paddingTop: 50,
    padding: 20,
    borderBottomEndRadius: 250,
    borderBottomStartRadius: 80,
    backgroundColor: "#9CE5CB",
    opacity: 0.8,
    alignItems: "flex-start",
    rowGap: 10,
  },
  bioView: {
    padding: 20,
    rowGap: 10,
  },
  overView: {
    color: "#002140",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: fonts.poppinsBold,
  },
  headText: {
    fontFamily: fonts.poppinsRegular,
    fontWeight: "500",
    fontSize: 20,
    color: "#002140",
  },
  ratingText: {
    fontFamily: fonts.poppinsRegular,
    fontWeight: "bold",
    fontSize: 11,
    color: "#0D986A",
  },
  text: {
    fontSize: 32,
    color: "black",
    fontFamily: fonts.philosopherBold,
  },
  header: {
    textAlign: "center",
    fontSize: 32,
    color: "#002140",
    fontFamily: fonts.philosopherBold,
  },

  productTitle: {
    fontSize: 38,
    fontFamily: fonts.philosopherBold,
    color: "#002140",
  },
  tinyLogo: {
    borderWidth: 5,
    position: "absolute",
    left: "35%",
    top: "45%",
    width: 300,
    height: 300,
  },
  priceTitle: {
    fontSize: 12,
    fontFamily: fonts.poppinsRegular,
    color: "#002140",
    lineHeight: 18,
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.poppinsBold,
    color: "#002140",
  },
  sizeTitle: {
    fontSize: 12,
    fontFamily: fonts.poppinsRegular,
    color: "#002140",
    lineHeight: 18,
  },
  ratingConatiner:{
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    columnGap: 10,
  }
});

export default ProductData;
