import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SignOut = ({ children }: any) => {
  const signout = async () => {
    try {
      const logout = await signOut(auth);
      console.log(logout);
      console.log("successfully signed out");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={signout}>
        {/* <Text style={styles.buttonText}>Signout</Text> */}
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  // pressed: {
  //   backgroundColor: "blue",
  //   width: "100%",
  //   paddingVertical: 10,
  //   paddingHorizontal: 30,
  //   borderRadius: 5,
  //   marginVertical: 20,
  // },
  // buttonText: {
  //   color: "white",
  //   fontWeight: "500",
  //   fontSIze: 20,
  //   textAlign: "center",
  // },
});

export default SignOut;
