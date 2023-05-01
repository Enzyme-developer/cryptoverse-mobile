import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";

const Nav = () => {
  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <Text>Jobify</Text>
        <Image style={styles.user} source={require("../assets/icon.png")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
  },

  user: {
    width: 40,
    height: 40,
    padding: 5,
    resizeMode: "stretch",
    backgroundColor: '#080080',
  },
});

export default Nav;
