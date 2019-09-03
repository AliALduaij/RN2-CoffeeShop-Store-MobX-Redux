import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation";

import HomePage from "../Components/HomePage";
import CoffeeList from "../Components/CoffeeList";
import Login from "../Components/Login";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const MyStack = createStackNavigator(
  {
    CoffeeCartScreen: CoffeeCart,
    CoffeeListScreen: CoffeeList,
    CoffeeDetailScreen: CoffeeDetail,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen"
  }
);
const AppContainer = createAppContainer(MyStack);

export default AppContainer;
