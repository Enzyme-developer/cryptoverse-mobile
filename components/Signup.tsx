import {
  ActivityIndicator,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'
import { useState } from "react";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <View>
      <Text>Signup</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(e: any) => setEmail(e.target.value)}
        placeholder="johndoe@gmail.com"
        inputMode="email"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(e: any) => setPassword(e.target.value)}
        placeholder="******"
        secureTextEntry={true}
      />

      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Signup;
