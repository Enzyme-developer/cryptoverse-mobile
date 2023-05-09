import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Touchable,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Auth = () => {
  const [tab, setTab] = useState("login");

  return (
    <View style={styles.container}>
      <View style={styles.tab}>{tab == "login" ? <Login /> : <Signup />}</View>

      <View>
        {tab == "login" ? (
          <View>
            <Text>Do not have an account?</Text>
            <Pressable onPress={() => setTab("signup")} style={styles.pressed}>
              <Text style={styles.buttonText}>Signup</Text>
            </Pressable>
          </View>
        ) : (
          <View>
            <Text>Already have an account?</Text>
            <Pressable onPress={() => setTab("login")} style={styles.pressed}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    width: "100%",
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSIze: 20,
    textAlign: "center",
  },
});

export default Auth;
