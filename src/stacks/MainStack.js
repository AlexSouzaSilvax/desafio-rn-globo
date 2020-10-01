import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "../screens/Login";
import MainTab from "../stacks/MainTab";

export default () => (
  <Stack.Navigator
    screenOptions={{
      inititalRouteName: "Login",
      headerShown: false,      
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
