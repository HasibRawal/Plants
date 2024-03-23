import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductList from "../screens/ProductList";
import ProductDetails from "../screens/ProductDetails";


export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: { productDetails: any };
};
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator   initialRouteName="ProductList">
        <Stack.Screen  options={{headerShown:false}} name="ProductList" component={ProductList} />
        <Stack.Screen  options={{headerShown:false}} name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
