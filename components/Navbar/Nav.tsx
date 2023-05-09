import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import Signout from "../auth/SignOut";

const Nav = () => {
  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <View>
          <Text style={styles.logo}>Jobify</Text>
        </View>
        <View>
          <Signout>
            <Pressable>
              <Image
                style={styles.user}
                source={require("../../assets/avatar.png")}
              />
            </Pressable>
          </Signout>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    marginTop: 40,
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

export default Nav;
