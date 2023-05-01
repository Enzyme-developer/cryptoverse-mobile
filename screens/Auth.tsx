import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Touchable,
  Button,
} from "react-native";
import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  
  const [tab, setTab] = useState("login");

  return (
    <View>
      <View style={styles.nav}>{tab == "login" ? <Login /> : <Signup />}</View>
      <View>
        {tab == "login" ? (
          <View>
            <Text>Do not have an account?</Text>
            <Button title="Signup" onPress={() => setTab("signUp")} />
          </View>
        ) : (
          <View>
            <Text>Already have an account?</Text>
            <Button title="Login" onPress={() => setTab("login")} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
  },
  user: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
    borderRadius: 5,
  },
});

export default Auth;
