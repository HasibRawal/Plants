import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import fonts from "../utils/fonts";
import Details from "../components/productDetails/Details";
import ProductData from "../components/productDetails/ProductData";

const ProductDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ProductData item={item} />
      <Details item={item} />
    </SafeAreaView>
  );
};

export default ProductDetails;

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
});
