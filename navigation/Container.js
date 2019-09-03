import { createStackNavigator } from "react-navigation";

import HomePage from "../Components/HomePage";
import CoffeeList from "../Components/CoffeeList";
import Login from "../Components/Login";
import CoffeeDetail from "../Components/CoffeeDetail";

const MyStack = createStackNavigator(
  {
    HomePageScreen: HomePage,
    CoffeeListScreen: CoffeeList,
    CoffeeDetailScreen: CoffeeDetail,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default MyStack;
