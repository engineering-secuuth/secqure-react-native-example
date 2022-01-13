import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {LandingPage_secqure} from "./components/LandingPage_sqre";
import {Secqure_Webview} from "secqure-react-native-sdk"
import ClearStorage from "./components/ClearAuthData";

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LandingPage_secqure} />
        <Stack.Screen name="Secqure_Webview" component={Secqure_Webview} />
        <Stack.Screen name="Logout" component={ClearStorage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


