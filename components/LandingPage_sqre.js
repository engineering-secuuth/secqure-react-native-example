import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { Pride } from "./Pride";

import logo from "../assets/images/Secqure-Logo.jpg";
import bg from "../assets/images/IndiaGeo.jpg";

const LandingPage_secqure = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.name}>Secqure Passwordless Demo</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <Image source={bg} style={styles.backgroundImage} />
          <Text style={styles.headline}>Discover India with us</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push("Secqure_Webview", {
                apiKey: "68cc59e4-ed89-4271-bce3-a5b417772103",
                secretKey: "WhVCbGmYX2vqydlO",
                callback: (data) => {
                  console.log("Returned Payload : " + data);
                  let refreshToken = data.refreshToken || data.tokens.refreshToken;
                  let accessToken = data.accessToken || data.tokens.accessToken;
                  console.log("RefreshToken: " + refreshToken)
                  console.log("AccessToken: " + accessToken)
                },
              });
            }}
          >
            <Text style={styles.buttontext}>Touch Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push("Logout", {
                callback: () => {
                  console.log("Logged out successfully")
                },
              });
            }}
          >
            <Text style={styles.buttontext}>Logout</Text>
          </TouchableOpacity>
          
          <Pride title="Mighty Himalayas" desc="Enjoy Your Travel To Kashmir, The Paradise"/>
          <Pride title="Great Indian Ocean" desc="Visit Ram Sethu aka Adam's Bridge between India and Sri Lanka"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { LandingPage_secqure };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    marginTop: 15,
    backgroundColor: "#c0c0c0"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "stretch",
  },
  logo: {
    height: 55,
    width: 65,
  },
  name: {
    marginRight: 60,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  main: {
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
  },
  headline: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2cc1ff",
    height: 43,
    width: 145,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttontext: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
});
